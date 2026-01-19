/**
 * Advanced Poker AI Logic
 * "Super Smart Dealer Poker Understanding"
 */

class AI {
    constructor(game) {
        this.game = game;
    }

    async makeMove(player) {
        // Simulate human thinking time (variable)
        const thinkingTime = 1000 + Math.random() * 2000;
        this.game.ui.setPlayerStatus(player.id, 'Thinking...');
        await new Promise(r => setTimeout(r, thinkingTime));
        this.game.ui.setPlayerStatus(player.id, '');

        const phase = this.game.phaseIndex; // 0=Pre, 1=Flop, 2=Turn, 3=River
        const holeCards = player.hand;
        const community = this.game.communityCards;
        const currentBet = this.game.currentBet;
        const toCall = currentBet - player.currentBet;
        const pot = this.game.pot;
        
        let action = 'fold';
        let amount = 0;

        if (phase === 0) {
            action = this.decidePreFlop(player, holeCards, toCall, currentBet);
        } else {
            action = this.decidePostFlop(player, holeCards, community, toCall, pot);
        }

        // Execution Logic
        if (action === 'check' && toCall > 0) action = 'fold'; // Safety
        if (action === 'call' && toCall === 0) action = 'check'; // Safety

        if (action === 'raise') {
            const minRaise = this.game.minRaise;
            // Bet sizing: 2.5x BB or Pot Size
            let raiseAmt = Math.max(minRaise, this.game.bigBlind * 2.5);
            
            // Randomize slightly to be less robotic
            raiseAmt += Math.floor(Math.random() * this.game.bigBlind);

            if (player.chips <= toCall) action = 'all-in';
            else if (player.chips < raiseAmt) action = 'all-in';
            else amount = currentBet + raiseAmt;
        }

        if (action === 'call' && player.chips <= toCall) action = 'all-in';

        // Animate Avatar based on action
        this.game.ui.animateAvatar(player.id, action);

        this.game.handlePlayerAction(action, amount);
    }

    decidePreFlop(player, hand, toCall, currentBet) {
        const c1 = hand[0];
        const c2 = hand[1];
        const pair = c1.rank === c2.rank;
        const suited = c1.suit === c2.suit;
        const highCard = Math.max(c1.value, c2.value);
        const lowCard = Math.min(c1.value, c2.value);
        const gap = highCard - lowCard;
        const connected = gap === 1;

        // Chen Formula-ish Score
        let score = 0;
        score += Math.max(10, c1.value) + Math.max(10, c2.value); // Simplified high card value
        if (pair) score *= 2;
        if (suited) score += 2;
        if (connected) score += 1;
        if (gap > 4) score -= 2;

        // Tighter ranges
        const isAggressive = Math.random() > 0.5; // Bot personality
        
        if (score > 28) return 'raise'; // AA, KK, QQ, AKs
        if (score > 20) return toCall > this.game.bigBlind * 3 ? 'call' : 'raise';
        if (score > 16) return 'call'; // Playable hands
        
        // Position / Pot Odds Logic (Simplified)
        if (toCall === 0) return 'check';
        
        // Random Bluff (Low frequency)
        if (Math.random() < 0.05) return 'raise';

        return 'fold';
    }

    decidePostFlop(player, hole, community, toCall, pot) {
        const evalResult = Evaluator.evaluate([...hole, ...community]);
        const handRank = evalResult.rank; // 1-10
        const score = evalResult.score;

        // Calculate Pot Odds
        const potOdds = toCall / (pot + toCall);
        
        // Hand Strength (0-1) relative to board texture is hard, using Rank
        // Rank 1 (High Card) -> Rank 10 (Royal Flush)
        
        // Determine "Made Hand" vs "Draw" (Draws not fully implemented, assume Made Hand logic)
        
        if (handRank >= 4) return 'raise'; // Three of a Kind or better -> Monster
        if (handRank === 3) return 'raise'; // Two Pair -> Strong
        if (handRank === 2) { // Pair
            // Top pair check? (Simplified: Pair is decent)
            if (toCall > pot * 0.5) return 'call'; // Call big bets
            return 'raise'; // Raise small bets
        }
        
        // High Card / Weak
        if (toCall === 0) return 'check';
        
        // Floating / Bluffing
        if (Math.random() < 0.1) return 'raise'; // Bluff
        if (toCall < pot * 0.1) return 'call'; // Cheap call

        return 'fold';
    }
}
