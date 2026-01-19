/**
 * Poker AI Logic
 */

class AI {
    constructor(game) {
        this.game = game;
    }

    async makeMove(player) {
        // Simulate thinking time
        await new Promise(r => setTimeout(r, 1000 + Math.random() * 2000));

        const hand = [...player.hand, ...this.game.communityCards];
        const evalResult = Evaluator.evaluate(hand);
        const score = evalResult.score;
        const currentBet = this.game.currentBet;
        const toCall = currentBet - player.currentBet;
        
        // Game Phase Logic
        const phase = this.game.phaseIndex; // 0=Pre, 1=Flop, 2=Turn, 3=River

        // Strength 0-10 scale (approx)
        // High card ~1, Pair ~2, Two Pair ~3...
        const strength = score / 1000000;

        let action = 'fold';
        let amount = 0;

        // Basic Decision Tree
        if (phase === 0) { // Pre-flop
            const c1 = player.hand[0];
            const c2 = player.hand[1];
            const isPair = c1.rank === c2.rank;
            const highCards = c1.value > 10 || c2.value > 10;
            
            if (isPair || highCards) {
                if (Math.random() > 0.3) action = 'raise';
                else action = 'call';
            } else if (c1.value > 8 && c2.value > 8) {
                action = 'call';
            } else {
                // Low cards
                if (toCall === 0) action = 'check';
                else action = Math.random() > 0.8 ? 'call' : 'fold'; // 20% bluff/loose
            }
        } else {
            // Post-flop
            if (strength >= 2) { // Pair or better
                if (strength >= 3) { // Two Pair+
                    action = 'raise';
                } else {
                    action = 'call';
                }
            } else {
                // High card / weak
                if (toCall === 0) action = 'check';
                else {
                    // Bluff chance
                    if (Math.random() > 0.85) action = 'raise'; // 15% bluff
                    else if (Math.random() > 0.6) action = 'call'; // Floating
                    else action = 'fold';
                }
            }
        }

        // Validate Action against chips
        if (action === 'raise') {
            const minRaise = this.game.minRaise;
            let raiseAmt = minRaise + Math.floor(Math.random() * 50); // Add variance
            
            if (player.chips <= toCall) {
                action = 'all-in';
            } else if (player.chips < raiseAmt) {
                action = 'all-in';
            } else {
                amount = currentBet + raiseAmt;
            }
        } else if (action === 'call') {
            if (player.chips <= toCall) action = 'all-in';
        }

        // If Check is possible but AI wants to Fold (logic error fix)
        if (action === 'fold' && toCall === 0) action = 'check';

        // Execute
        this.game.handlePlayerAction(action, amount);
    }
}
