/**
 * Professional Texas Hold'em Game Engine
 * "Super Smart Dealer"
 */

const PHASES = ['PRE-FLOP', 'FLOP', 'TURN', 'RIVER', 'SHOWDOWN'];

class Player {
    constructor(id, name, isBot = false, chips = 10000) {
        this.id = id;
        this.name = name;
        this.isBot = isBot;
        this.chips = chips;
        this.hand = [];
        this.status = 'active'; 
        this.currentBet = 0;
        this.totalBetThisHand = 0;
        this.hasActedThisRound = false;
        
        // Customization
        this.hat = null;
        this.gloves = null;
    }

    resetForHand() {
        this.hand = [];
        this.status = this.chips > 0 ? 'active' : 'out';
        this.currentBet = 0;
        this.totalBetThisHand = 0;
        this.hasActedThisRound = false;
    }
}

class Game {
    constructor(ui) {
        this.ui = ui;
        this.deck = new Deck();
        this.players = [];
        this.communityCards = [];
        this.pot = 0;
        this.dealerIndex = 0;
        this.currentPlayerIndex = 0;
        this.phaseIndex = 0;
        this.currentBet = 0;
        this.minRaise = 20;
        this.bigBlind = 20;
        this.smallBlind = 10;
        this.gameActive = false;
        this.turnTimer = null;
        this.timeLeft = 0;
        
        this.ai = new AI(this);
        this.initPlayers();
    }

    initPlayers() {
        this.players.push(new Player(0, 'You', false, 10000));
        this.players.push(new Player(1, 'Bot Alpha', true, 10000));
        this.players.push(new Player(2, 'Bot Beta', true, 10000));
        this.players.push(new Player(3, 'Bot Gamma', true, 10000));
        this.players.push(new Player(4, 'Bot Delta', true, 10000));
        
        this.ui.updatePlayers(this.players);
    }

    startHand() {
        // Reset flags
        this.players.forEach(p => {
            if (p.chips <= 0) p.status = 'out';
            else p.resetForHand();
        });

        if (this.players.filter(p => p.status !== 'out').length < 2) {
            this.ui.showGameOver("Tournament Ended!");
            return;
        }

        this.gameActive = true;
        this.phaseIndex = 0; // PRE-FLOP
        this.pot = 0;
        this.communityCards = [];
        this.deck.reset();
        this.deck.shuffle();
        this.currentBet = this.bigBlind;

        // Move Dealer Button
        this.dealerIndex = (this.dealerIndex + 1) % this.players.length;
        
        // Ensure Dealer is active (simple skip)
        while (this.players[this.dealerIndex].status === 'out') {
            this.dealerIndex = (this.dealerIndex + 1) % this.players.length;
        }

        this.postBlinds();
        this.dealHoleCards();

        this.ui.resetTable();
        this.ui.updateDealer(this.dealerIndex);
        this.ui.updatePot(this.pot);
        this.ui.updateCommunityCards(this.communityCards);
        
        console.log("Hand Started. Dealer:", this.dealerIndex);
        this.nextTurn();
    }

    postBlinds() {
        let sbIndex = (this.dealerIndex + 1) % this.players.length;
        while (this.players[sbIndex].status === 'out') sbIndex = (sbIndex + 1) % this.players.length;
        
        let bbIndex = (sbIndex + 1) % this.players.length;
        while (this.players[bbIndex].status === 'out') bbIndex = (bbIndex + 1) % this.players.length;

        this.placeBet(this.players[sbIndex], this.smallBlind);
        this.players[sbIndex].hasActedThisRound = false; 
        
        this.placeBet(this.players[bbIndex], this.bigBlind);
        this.players[bbIndex].hasActedThisRound = false;

        // Start UTG (Under The Gun)
        this.currentPlayerIndex = (bbIndex + 1) % this.players.length;
    }

    placeBet(player, amount) {
        if (amount > player.chips + player.currentBet) amount = player.chips + player.currentBet; // Cap at max possible
        
        const contribution = amount - player.currentBet;
        if (contribution < 0) return;

        player.chips -= contribution;
        player.currentBet = amount;
        player.totalBetThisHand += contribution;
        this.pot += contribution;

        if (player.chips === 0) player.status = 'all-in';
        if (amount > this.currentBet) {
            this.currentBet = amount;
            this.minRaise = amount * 2; 
        }

        this.ui.updatePlayerChips(player);
        this.ui.updatePot(this.pot);
        
        const actionText = amount === 0 ? 'Check' : (amount === this.currentBet ? 'Call' : 'Raise');
        this.ui.showAction(player, actionText);
    }

    dealHoleCards() {
        for (let i = 0; i < 2; i++) {
            this.players.forEach(p => {
                if (p.status !== 'out') {
                    p.hand.push(this.deck.deal());
                }
            });
        }
        this.ui.dealCards(this.players);
        this.updateUserHandStrength();
    }

    updateUserHandStrength() {
        const user = this.players[0];
        if (user.status !== 'out') {
            const result = Evaluator.evaluate([...user.hand, ...this.communityCards]);
            this.ui.updateHandStrength(result.name);
        }
    }

    startTimer() {
        if (this.turnTimer) clearInterval(this.turnTimer);
        this.timeLeft = 15; 
        this.ui.updateTimer(this.timeLeft, 15);
        
        this.turnTimer = setInterval(() => {
            this.timeLeft--;
            this.ui.updateTimer(this.timeLeft, 15);
            
            if (this.timeLeft <= 0) {
                clearInterval(this.turnTimer);
                this.handlePlayerAction('fold'); 
            }
        }, 1000);
    }

    stopTimer() {
        if (this.turnTimer) clearInterval(this.turnTimer);
        this.ui.hideTimer();
    }

    async nextTurn() {
        this.stopTimer();

        if (this.isRoundComplete()) {
            this.nextPhase();
            return;
        }

        // Find next active player
        let loopCount = 0;
        while ((this.players[this.currentPlayerIndex].status !== 'active') && loopCount < this.players.length) {
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
            loopCount++;
        }

        // Everyone folded/all-in except one?
        if (this.checkWinByDefault()) return;

        const player = this.players[this.currentPlayerIndex];
        this.ui.highlightPlayer(this.currentPlayerIndex);
        this.startTimer();

        if (player.isBot) {
            await this.ai.makeMove(player);
        } else {
            this.ui.enableControls(player, this.currentBet);
        }
    }

    async handlePlayerAction(action, amount = 0) {
        this.stopTimer();
        const player = this.players[this.currentPlayerIndex];
        player.hasActedThisRound = true;
        
        // Animation
        this.ui.animateAvatar(player.id, action);

        switch(action) {
            case 'fold':
                player.status = 'folded';
                this.ui.showAction(player, 'Fold');
                break;
            case 'check':
                this.ui.showAction(player, 'Check');
                break;
            case 'call':
                this.placeBet(player, this.currentBet);
                break;
            case 'raise':
                this.placeBet(player, amount);
                break;
            case 'all-in':
                this.placeBet(player, player.chips + player.currentBet);
                break;
        }

        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        
        // Pace the game
        setTimeout(() => this.nextTurn(), 600);
    }

    isRoundComplete() {
        const activePlayers = this.players.filter(p => p.status === 'active');
        if (activePlayers.length === 0) return true; 

        const allMatched = activePlayers.every(p => p.currentBet === this.currentBet);
        const allActed = activePlayers.every(p => p.hasActedThisRound);
        
        return allMatched && allActed;
    }
    
    nextPhase() {
        this.phaseIndex++;
        const phase = PHASES[this.phaseIndex];
        console.log("Starting Phase:", phase);
        
        // Reset Betting
        this.players.forEach(p => {
            p.currentBet = 0;
            p.hasActedThisRound = false;
        });
        this.currentBet = 0;
        
        // Start left of dealer
        this.currentPlayerIndex = (this.dealerIndex + 1) % this.players.length;

        this.ui.updatePot(this.pot);

        // Deal Community Cards
        if (phase === 'FLOP') {
            this.deck.deal(); // Burn
            this.communityCards.push(this.deck.deal(), this.deck.deal(), this.deck.deal());
        } else if (phase === 'TURN') {
            this.deck.deal(); // Burn
            this.communityCards.push(this.deck.deal());
        } else if (phase === 'RIVER') {
            this.deck.deal(); // Burn
            this.communityCards.push(this.deck.deal());
        } else if (phase === 'SHOWDOWN') {
            this.handleShowdown();
            return;
        }

        this.ui.updateCommunityCards(this.communityCards);
        this.updateUserHandStrength();
        
        // Check if only 1 active player remains (others all-in) -> Auto-run to Showdown
        const active = this.players.filter(p => p.status === 'active');
        if (active.length < 2) {
            setTimeout(() => this.nextPhase(), 2000);
        } else {
            this.nextTurn();
        }
    }

    handleShowdown() {
        const activePlayers = this.players.filter(p => p.status !== 'folded' && p.status !== 'out');
        
        const results = activePlayers.map(p => {
            const evalResult = Evaluator.evaluate([...p.hand, ...this.communityCards]);
            return { player: p, result: evalResult };
        });

        results.sort((a, b) => b.result.score - a.result.score);
        const winner = results[0];
        
        this.ui.showShowdown(results); 
        
        setTimeout(() => {
            this.distributeWinnings(winner.player);
        }, 3000);
    }

    checkWinByDefault() {
        const active = this.players.filter(p => p.status !== 'folded' && p.status !== 'out');
        if (active.length === 1) {
            this.distributeWinnings(active[0]);
            return true;
        }
        return false;
    }

    distributeWinnings(winner) {
        winner.chips += this.pot;
        this.ui.announceWinner(winner, this.pot);
        this.pot = 0;
        this.ui.updatePot(0);
        this.ui.updatePlayerChips(winner);
        
        setTimeout(() => {
            this.startHand();
        }, 5000);
    }
}

// Initialize Game
window.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const game = new Game(ui);
    
    // Check if Firebase is loaded
    if (typeof firebase !== 'undefined') {
        const mp = new Multiplayer(game, ui);
        game.multiplayer = mp;
    }
    
    ui.setGame(game);
    ui.updatePlayers(game.players);
});
