/**
 * Poker Hand Evaluator
 */

const HAND_RANKS = {
    HIGH_CARD: 1,
    PAIR: 2,
    TWO_PAIR: 3,
    THREE_OF_A_KIND: 4,
    STRAIGHT: 5,
    FLUSH: 6,
    FULL_HOUSE: 7,
    FOUR_OF_A_KIND: 8,
    STRAIGHT_FLUSH: 9,
    ROYAL_FLUSH: 10
};

const RANK_NAMES = {
    1: 'High Card',
    2: 'Pair',
    3: 'Two Pair',
    4: 'Three of a Kind',
    5: 'Straight',
    6: 'Flush',
    7: 'Full House',
    8: 'Four of a Kind',
    9: 'Straight Flush',
    10: 'Royal Flush'
};

class Evaluator {
    static evaluate(cards) {
        if (cards.length === 0) return { rank: 0, name: 'Empty', score: 0 };
        
        // Convert to easy format for analysis
        // Sort by value desc
        const sorted = [...cards].sort((a, b) => b.value - a.value);
        
        const flush = this.checkFlush(sorted);
        const straight = this.checkStraight(sorted);
        const multiples = this.checkMultiples(sorted); // Returns pairs, trips, quads

        // Royal Flush & Straight Flush
        if (flush && straight) {
            // Check if straight flush
            // This logic is simplified; strict check would verify the straight cards are the flush cards
            // For this game engine, we'll do a robust check
            const straightFlush = this.checkStraightFlush(sorted);
            if (straightFlush) {
                if (straightFlush.high === 14) {
                    return { rank: HAND_RANKS.ROYAL_FLUSH, name: 'Royal Flush', score: 10000000 };
                }
                return { rank: HAND_RANKS.STRAIGHT_FLUSH, name: 'Straight Flush', score: 9000000 + straightFlush.high };
            }
        }

        // Four of a Kind
        if (multiples.quads.length > 0) {
            const kicker = sorted.find(c => c.value !== multiples.quads[0]).value;
            return { 
                rank: HAND_RANKS.FOUR_OF_A_KIND, 
                name: 'Four of a Kind', 
                score: 8000000 + multiples.quads[0] * 100 + kicker 
            };
        }

        // Full House
        if (multiples.trips.length > 0 && (multiples.trips.length > 1 || multiples.pairs.length > 0)) {
            const tripVal = multiples.trips[0];
            const pairVal = multiples.trips.length > 1 ? multiples.trips[1] : multiples.pairs[0];
            return { 
                rank: HAND_RANKS.FULL_HOUSE, 
                name: 'Full House', 
                score: 7000000 + tripVal * 100 + pairVal 
            };
        }

        // Flush
        if (flush) {
            return { 
                rank: HAND_RANKS.FLUSH, 
                name: 'Flush', 
                score: 6000000 + flush.reduce((sum, v, i) => sum + v * Math.pow(0.1, i), 0) // Tie break by high cards
            };
        }

        // Straight
        if (straight) {
            return { 
                rank: HAND_RANKS.STRAIGHT, 
                name: 'Straight', 
                score: 5000000 + straight.high 
            };
        }

        // Three of a Kind
        if (multiples.trips.length > 0) {
            const kickers = sorted.filter(c => c.value !== multiples.trips[0]).slice(0, 2);
            return { 
                rank: HAND_RANKS.THREE_OF_A_KIND, 
                name: 'Three of a Kind', 
                score: 4000000 + multiples.trips[0] * 1000 + this.getKickerScore(kickers)
            };
        }

        // Two Pair
        if (multiples.pairs.length >= 2) {
            const highPair = multiples.pairs[0];
            const lowPair = multiples.pairs[1];
            const kicker = sorted.find(c => c.value !== highPair && c.value !== lowPair).value;
            return { 
                rank: HAND_RANKS.TWO_PAIR, 
                name: 'Two Pair', 
                score: 3000000 + highPair * 1000 + lowPair * 10 + kicker
            };
        }

        // Pair
        if (multiples.pairs.length === 1) {
            const pair = multiples.pairs[0];
            const kickers = sorted.filter(c => c.value !== pair).slice(0, 3);
            return { 
                rank: HAND_RANKS.PAIR, 
                name: 'Pair', 
                score: 2000000 + pair * 1000 + this.getKickerScore(kickers)
            };
        }

        // High Card
        return { 
            rank: HAND_RANKS.HIGH_CARD, 
            name: 'High Card', 
            score: 1000000 + this.getKickerScore(sorted.slice(0, 5))
        };
    }

    static checkFlush(cards) {
        const suits = {};
        for (let c of cards) {
            suits[c.suit] = (suits[c.suit] || 0) + 1;
        }
        for (let s in suits) {
            if (suits[s] >= 5) {
                // Return values of flush cards sorted desc
                return cards.filter(c => c.suit === s).map(c => c.value).slice(0, 5);
            }
        }
        return null;
    }

    static checkStraight(cards) {
        // Unique values sorted desc
        const values = [...new Set(cards.map(c => c.value))];
        
        // Handle Ace low straight (A, 5, 4, 3, 2)
        if (values.includes(14)) values.push(1); // Add Ace as 1

        let streak = 0;
        let high = 0;

        for (let i = 0; i < values.length - 1; i++) {
            if (values[i] - values[i+1] === 1) {
                streak++;
                if (streak >= 4) { // 5 cards total
                    high = values[i - 3]; // The highest card in the sequence
                    return { high: high };
                }
            } else {
                streak = 0;
            }
        }
        return null;
    }

    static checkStraightFlush(cards) {
        // Filter by suit first
        const suits = {};
        let flushSuit = null;
        for (let c of cards) suits[c.suit] = (suits[c.suit] || 0) + 1;
        for (let s in suits) if (suits[s] >= 5) flushSuit = s;
        
        if (!flushSuit) return null;

        const flushCards = cards.filter(c => c.suit === flushSuit);
        return this.checkStraight(flushCards);
    }

    static checkMultiples(cards) {
        const counts = {};
        for (let c of cards) counts[c.value] = (counts[c.value] || 0) + 1;
        
        const quads = [];
        const trips = [];
        const pairs = [];

        Object.keys(counts).forEach(val => {
            const v = parseInt(val);
            if (counts[val] === 4) quads.push(v);
            if (counts[val] === 3) trips.push(v);
            if (counts[val] === 2) pairs.push(v);
        });

        // Sort desc
        quads.sort((a, b) => b - a);
        trips.sort((a, b) => b - a);
        pairs.sort((a, b) => b - a);

        return { quads, trips, pairs };
    }

    static getKickerScore(cards) {
        // Returns a fractional score based on kickers
        // e.g., K, 8, 4 -> 0.130804
        return cards.reduce((sum, c, i) => sum + c.value * Math.pow(0.01, i + 1), 0);
    }
}
