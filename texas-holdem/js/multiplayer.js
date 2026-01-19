/**
 * Multiplayer Logic (Firebase)
 */

class Multiplayer {
    constructor(game, ui) {
        this.game = game;
        this.ui = ui;
        this.db = null;
        this.mySeat = null;
        this.isHost = false;
        this.tableId = 'default';
        this.unsubscribe = null;
        
        this.initFirebase();
    }

    initFirebase() {
        // Snake Game Config (Reused)
        const firebaseConfig = {
            apiKey: "AIzaSyBWdI4FIlT1HIHWYnIFQHSy620IiDprX1c",
            authDomain: "snake-game-dfe3b.firebaseapp.com",
            projectId: "snake-game-dfe3b",
            storageBucket: "snake-game-dfe3b.firebasestorage.app",
            messagingSenderId: "402038974183",
            appId: "1:402038974183:web:0d00ea33ec7c6497d16442"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        this.db = firebase.database();
        
        this.joinTable();
    }

    async joinTable() {
        const tableRef = this.db.ref(`tables/${this.tableId}`);
        const seatsRef = tableRef.child('seats');
        
        // Transaction to find seat
        const snapshot = await seatsRef.get();
        const seats = snapshot.val() || {};
        
        let foundSeat = null;
        
        // Try to find empty seat (0-4)
        for (let i = 0; i < 5; i++) {
            const seat = seats[i];
            if (!seat || (Date.now() - seat.lastSeen > 10000)) { // 10s timeout
                foundSeat = i;
                break;
            }
        }

        if (foundSeat !== null) {
            this.mySeat = foundSeat;
            this.isHost = (foundSeat === 0);
            
            // Register
            const playerInfo = {
                id: this.mySeat,
                name: `Player ${this.mySeat + 1}`,
                active: true,
                lastSeen: firebase.database.ServerValue.TIMESTAMP
            };
            
            seatsRef.child(this.mySeat).set(playerInfo);
            
            // Setup Heartbeat
            setInterval(() => {
                seatsRef.child(this.mySeat).update({ lastSeen: firebase.database.ServerValue.TIMESTAMP });
            }, 5000);
            
            // Remove on disconnect
            seatsRef.child(this.mySeat).onDisconnect().remove();
            
            console.log(`Joined as Seat ${this.mySeat} (${this.isHost ? 'HOST' : 'CLIENT'})`);
            
            if (!this.isHost) {
                // Override Game Action to send to Network
                this.game.handlePlayerAction = (action, amount) => {
                    this.sendAction(action, amount);
                };
            }
            
            this.setupGameListeners();
        } else {
            console.log("Table full. Spectating.");
            this.setupSpectator();
        }
    }

    setupGameListeners() {
        const stateRef = this.db.ref(`tables/${this.tableId}/gameState`);
        const actionsRef = this.db.ref(`tables/${this.tableId}/actions`);

        if (this.isHost) {
            // HOST LOGIC
            // 1. Run Game locally
            // 2. Broadcast state changes
            // 3. Listen for client actions
            
            this.game.startHand(); // Start immediately
            
            // Hook into Game updates (Monkey patch or Event)
            // We'll broadcast periodically or after key events in Game
            setInterval(() => this.broadcastState(), 500);
            
            actionsRef.on('child_added', (snapshot) => {
                const action = snapshot.val();
                if (action) {
                    this.game.handlePlayerAction(action.type, action.amount); // Apply to local game
                    snapshot.ref.remove(); // Consume action
                }
            });
            
        } else {
            // CLIENT LOGIC
            // 1. Listen to state updates
            // 2. Update Local Game/UI to match
            // 3. Send actions
            
            stateRef.on('value', (snapshot) => {
                const state = snapshot.val();
                if (state) {
                    this.syncState(state);
                }
            });
        }
    }

    setupSpectator() {
        const stateRef = this.db.ref(`tables/${this.tableId}/gameState`);
        stateRef.on('value', (snapshot) => {
            const state = snapshot.val();
            if (state) this.syncState(state);
        });
    }

    broadcastState() {
        if (!this.game.gameActive) return;
        
        // Serialize Game State
        const state = {
            pot: this.game.pot,
            communityCards: this.game.communityCards,
            dealerIndex: this.game.dealerIndex,
            currentPlayerIndex: this.game.currentPlayerIndex,
            currentBet: this.game.currentBet,
            phaseIndex: this.game.phaseIndex,
            players: this.game.players.map(p => ({
                id: p.id,
                name: p.name,
                chips: p.chips,
                currentBet: p.currentBet,
                status: p.status,
                hand: p.hand, // Insecure but needed for simplicity
                isBot: p.isBot
            }))
        };
        
        this.db.ref(`tables/${this.tableId}/gameState`).set(state);
    }

    syncState(state) {
        // Update Local Game Model
        this.game.pot = state.pot;
        this.game.communityCards = state.communityCards || [];
        this.game.dealerIndex = state.dealerIndex;
        this.game.currentPlayerIndex = state.currentPlayerIndex;
        this.game.currentBet = state.currentBet;
        
        // Update Players
        if (state.players) {
            state.players.forEach((pData, i) => {
                const localP = this.game.players[i];
                localP.chips = pData.chips;
                localP.currentBet = pData.currentBet;
                localP.status = pData.status;
                // Update hand only if it's me or Showdown?
                // For now sync all to ensure UI works
                // But hide in UI if not me
                localP.hand = pData.hand || [];
            });
        }

        // Update UI
        this.ui.updatePot(this.game.pot);
        this.ui.updateCommunityCards(this.game.communityCards);
        this.ui.updatePlayers(this.game.players);
        this.ui.updateDealer(this.game.dealerIndex);
        
        // Check if it's my turn
        if (this.game.currentPlayerIndex === this.mySeat) {
            this.ui.highlightPlayer(this.mySeat);
            this.ui.enableControls(this.game.players[this.mySeat], this.game.currentBet);
            this.game.startTimer();
        } else {
            this.ui.highlightPlayer(this.game.currentPlayerIndex);
            document.getElementById('betting-controls').classList.remove('active');
            this.game.stopTimer();
        }
        
        // Render cards (Blind logic handled in UI)
        this.ui.dealCards(this.game.players);
    }

    sendAction(type, amount) {
        if (this.isHost) {
            // Host applies directly
            this.game.handlePlayerAction(type, amount);
        } else {
            // Client pushes to queue
            this.db.ref(`tables/${this.tableId}/actions`).push({
                seat: this.mySeat,
                type: type,
                amount: amount,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
        }
    }
}
