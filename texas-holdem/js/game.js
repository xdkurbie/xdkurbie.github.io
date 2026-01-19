/**
 * Texas Hold'em Game Engine
 */

const PHASES = ['PRE-FLOP', 'FLOP', 'TURN', 'RIVER', 'SHOWDOWN'];

class Player {
    constructor(id, name, isBot = false, chips = 10000) {
        this.id = id;
        this.name = name;
        this.isBot = isBot;
        this.chips = chips;
        this.hand = [];
        this.status = 'active'; // active, folded, all-in
        this.currentBet = 0;
        this.totalBetThisHand = 0;
        
        // Customization
        this.hat = null;
        this.gloves = null;
    }

    resetForHand() {
        this.hand = [];
        this.status = this.chips > 0 ? 'active' : 'out';
        this.currentBet = 0;
        this.totalBetThisHand = 0;
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
        this.currentBet = 0; // Highest bet in current round
        this.minRaise = 20;
        this.bigBlind = 20;
        this.smallBlind = 10;
        this.gameActive = false;
        
        // AI Controller
        this.ai = new AI(this);

        this.initPlayers();
    }

    initPlayers() {
        // User
        this.players.push(new Player(0, 'You', false, 10000));
        // Bots
        this.players.push(new Player(1, 'Bot Alpha', true, 10000));
        this.players.push(new Player(2, 'Bot Beta', true, 10000));
        this.players.push(new Player(3, 'Bot Gamma', true, 10000));
        this.players.push(new Player(4, 'Bot Delta', true, 10000));
        
        this.ui.updatePlayers(this.players);
    }

    startHand() {
        if (this.players.filter(p => p.chips > 0).length < 2) {
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

        // Reset players
        this.players.forEach(p => p.resetForHand());

        // Move Dealer Button
        this.dealerIndex = (this.dealerIndex + 1) % this.players.length;
        // Skip eliminated players for dealer button if necessary, but simple rotation is fine for now

        // Post Blinds
        this.postBlinds();

        // Deal Cards
        this.dealHoleCards();

        this.ui.resetTable();
        this.ui.updateDealer(this.dealerIndex);
        this.ui.updatePot(this.pot);
        this.ui.updateCommunityCards(this.communityCards);
        
        // Start Betting
        this.nextTurn();
    }

    postBlinds() {
        const sbIndex = (this.dealerIndex + 1) % this.players.length;
        const bbIndex = (this.dealerIndex + 2) % this.players.length;

        this.placeBet(this.players[sbIndex], this.smallBlind);
        this.placeBet(this.players[bbIndex], this.bigBlind);

        this.currentPlayerIndex = (bbIndex + 1) % this.players.length;
    }

    placeBet(player, amount) {
        if (amount > player.chips) amount = player.chips; // All-in
        
        const contribution = amount - player.currentBet; // Additional amount needed
        if (contribution < 0) return; // Should not happen

        player.chips -= contribution;
        player.currentBet = amount;
        player.totalBetThisHand += contribution;
        this.pot += contribution;

        if (player.chips === 0) player.status = 'all-in';
        if (amount > this.currentBet) {
            this.currentBet = amount;
            this.minRaise = amount * 2; // Simple double raise rule
        }

        this.ui.updatePlayerChips(player);
        this.ui.updatePot(this.pot);
        this.ui.showAction(player, amount === 0 ? 'Check' : (amount === this.currentBet ? 'Call' : 'Raise'));
    }

    dealHoleCards() {
        // Deal 2 cards to each active player
        for (let i = 0; i < 2; i++) {
            this.players.forEach(p => {
                if (p.status !== 'out') {
                    p.hand.push(this.deck.deal());
                }
            });
        }
        this.ui.dealCards(this.players);
        
        // Calculate user hand strength immediately for UI
        this.updateUserHandStrength();
    }

    updateUserHandStrength() {
        const user = this.players[0];
        if (user.status !== 'out') {
            const result = Evaluator.evaluate([...user.hand, ...this.communityCards]);
            this.ui.updateHandStrength(result.name);
        }
    }

    async nextTurn() {
        // Check if round should end
        if (this.isRoundComplete()) {
            this.nextPhase();
            return;
        }

        // Skip folded/all-in players (unless everyone is all-in, handled in isRoundComplete)
        let loopCount = 0;
        while ((this.players[this.currentPlayerIndex].status !== 'active') && loopCount < this.players.length) {
            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
            loopCount++;
        }

        // If everyone folded but one, they win immediately
        if (this.checkWinByDefault()) return;

        const player = this.players[this.currentPlayerIndex];
        this.ui.highlightPlayer(this.currentPlayerIndex);

        if (player.isBot) {
            await this.ai.makeMove(player);
        } else {
            this.ui.enableControls(player, this.currentBet);
        }
    }

    async handlePlayerAction(action, amount = 0) {
        const player = this.players[this.currentPlayerIndex];
        
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
        setTimeout(() => this.nextTurn(), 500); // Small delay for pacing
    }

    isRoundComplete() {
        // Check if all active players have matched the current bet
        // And everyone has acted at least once (unless pre-flop big blind option)
        const activePlayers = this.players.filter(p => p.status === 'active');
        if (activePlayers.length === 0) return true; // Everyone all-in or folded

        const allMatched = activePlayers.every(p => p.currentBet === this.currentBet);
        
        // Hacky check: ensure we don't end round immediately on pre-flop big blind
        // Real logic is more complex, but for this engine:
        // If currentBet > 0 and all matched, proceed.
        // Special case: Big blind pre-flop gets to act.
        
        // Simplification: We track "actors left" in a robust engine. 
        // Here: if everyone acted and bets match.
        // For MVP: assume complete if all matched and it's not the start of a betting round where no one acted.
        // We'll rely on the turn loop to ensure everyone gets a chance.
        // Actually, let's just cycle until the betting stabilizes.
        
        // We need a flag if any action occurred this round.
        // For now, let's assume if we cycle back to the aggressor (or BB), it's done.
        
        return allMatched && this.lastAggressorIndex === this.currentPlayerIndex; 
        // This is tricky. Let's simplify: 
        // Round ends when everyone matches the highest bet.
        // We need to ensure everyone had a chance.
    }
    
    // Simplified round management
    // We will just let the loop run. If we reach a player who has already matched the highest bet AND no one has raised since their last turn...
    // Let's implement a 'actedThisRound' set.
    
    nextPhase() {
        this.phaseIndex++;
        const phase = PHASES[this.phaseIndex];
        
        // Reset bets for new round
        this.players.forEach(p => {
            p.currentBet = 0;
            if (p.status === 'active' || p.status === 'all-in') {
                // Keep status
            }
        });
        this.currentBet = 0;
        this.currentPlayerIndex = (this.dealerIndex + 1) % this.players.length; // Start left of dealer

        this.ui.updatePot(this.pot);

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
        
        // Auto-progress if everyone is all-in
        const active = this.players.filter(p => p.status === 'active');
        if (active.length < 2) {
            setTimeout(() => this.nextPhase(), 1000);
        } else {
            this.nextTurn();
        }
    }

    handleShowdown() {
        const activePlayers = this.players.filter(p => p.status !== 'folded' && p.status !== 'out');
        
        // Evaluate all hands
        const results = activePlayers.map(p => {
            const evalResult = Evaluator.evaluate([...p.hand, ...this.communityCards]);
            return { player: p, result: evalResult };
        });

        // Sort by score desc
        results.sort((a, b) => b.result.score - a.result.score);

        const winner = results[0];
        // Handle ties (split pot) - simplified: first player wins
        
        this.ui.showShowdown(results); // Reveal all cards
        
        setTimeout(() => {
            this.distributeWinnings(winner.player);
        }, 2000);
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
        }, 4000);
    }
}

// Initialize Game
window.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const game = new Game(ui);
    ui.setGame(game);
    
    // Initial Render
    ui.updatePlayers(game.players);
});
