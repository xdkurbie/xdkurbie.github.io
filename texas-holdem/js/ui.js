/**
 * UI Controller & Customization System
 */

class UI {
    constructor() {
        this.game = null; // Set later
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.shopItems = {
            hats: [
                { id: 'hat_none', name: 'No Hat', price: 0, icon: '🚫' },
                { id: 'hat_cowboy', name: 'Cowboy Hat', price: 500, icon: '🤠' },
                { id: 'hat_top', name: 'Top Hat', price: 1000, icon: '🎩' },
                { id: 'hat_cap', name: 'Baseball Cap', price: 300, icon: '🧢' },
                { id: 'hat_crown', name: 'Crown', price: 5000, icon: '👑' }
            ],
            gloves: [
                { id: 'glove_none', name: 'No Gloves', price: 0, icon: '🚫' },
                { id: 'glove_white', name: 'White Gloves', price: 400, icon: '🧤' },
                { id: 'glove_box', name: 'Boxing', price: 800, icon: '🥊' },
                { id: 'glove_robot', name: 'Robot Hand', price: 2000, icon: '🦾' }
            ],
            felts: [
                { id: 'felt_green', name: 'Classic Green', price: 0, color: '#0f3d0f' },
                { id: 'felt_blue', name: 'Royal Blue', price: 1000, color: '#0f1f3d' },
                { id: 'felt_red', name: 'Casino Red', price: 1000, color: '#3d0f0f' },
                { id: 'felt_black', name: 'Midnight Black', price: 2000, color: '#1a1a1a' }
            ]
        };
        
        this.inventory = {
            hats: ['hat_none'],
            gloves: ['glove_none'],
            felts: ['felt_green']
        };
        
        this.equipped = {
            hat: 'hat_none',
            glove: 'glove_none',
            felt: 'felt_green'
        };

        this.initEventListeners();
        this.renderShop();
    }

    playSound(type) {
        if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
        
        const osc = this.audioCtx.createOscillator();
        const gainNode = this.audioCtx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(this.audioCtx.destination);
        
        const now = this.audioCtx.currentTime;
        
        if (type === 'chip') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'card') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(300, now); // frequency in Hz
            gainNode.gain.setValueAtTime(0.05, now);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        } else if (type === 'win') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.linearRampToValueAtTime(800, now + 0.2);
            osc.frequency.linearRampToValueAtTime(400, now + 0.4);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.linearRampToValueAtTime(0, now + 0.5);
            osc.start(now);
            osc.stop(now + 0.5);
        } else if (type === 'click') {
            osc.type = 'square';
            osc.frequency.setValueAtTime(200, now);
            gainNode.gain.setValueAtTime(0.02, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        }
    }

    setGame(game) {
        this.game = game;
    }

    initEventListeners() {
        // Betting Controls
        document.getElementById('btn-fold').onclick = () => this.game.handlePlayerAction('fold');
        document.getElementById('btn-check').onclick = () => this.game.handlePlayerAction('check');
        document.getElementById('btn-call').onclick = () => this.game.handlePlayerAction('call');
        document.getElementById('btn-raise').onclick = () => {
            const val = parseInt(document.getElementById('bet-slider').value);
            this.game.handlePlayerAction('raise', val);
        };
        
        document.getElementById('bet-slider').oninput = (e) => {
            document.getElementById('bet-val-display').textContent = '$' + e.target.value;
        };

        document.getElementById('btn-start-game').onclick = () => {
            document.getElementById('btn-start-game').style.display = 'none';
            this.game.startHand();
        };

        // Modals
        const modals = document.querySelectorAll('.modal');
        document.querySelectorAll('.close-modal').forEach(btn => {
            btn.onclick = () => modals.forEach(m => m.classList.remove('active'));
        });

        document.getElementById('hand-rankings-btn').onclick = () => {
            document.getElementById('rankings-modal').classList.add('active');
        };

        document.getElementById('shop-btn').onclick = () => {
            document.getElementById('shop-modal').classList.add('active');
            this.renderShop();
        };

        document.getElementById('btn-restart').onclick = () => {
            location.reload();
        };

        // Withdraw Button
        const withdrawBtn = document.getElementById('withdraw-match-btn');
        if (withdrawBtn) {
            withdrawBtn.onclick = () => {
                if (confirm("Are you sure you want to withdraw? You will lose your seat.")) {
                    window.location.href = "../index.html";
                }
            };
        }

        // Winnings Modal Next Round
        const btnNextRound = document.getElementById('btn-next-round');
        if (btnNextRound) {
            btnNextRound.onclick = () => {
                const modal = document.getElementById('winnings-modal');
                if (modal) modal.classList.remove('active');
                // Check if we need to manually trigger next round or if it's automatic
                // Game loop handles it, this just closes modal
            };
        }

        // Shop Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.onclick = (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.renderShop(e.target.dataset.tab);
            };
        });
    }

    updatePlayers(players) {
        players.forEach(p => {
            this.updatePlayerChips(p);
            // Render basic avatar info if needed
        });
    }

    updatePlayerChips(player) {
        const el = document.querySelector(`#seat-${player.id} .player-chips`);
        if (el) {
            el.innerHTML = '';
            // Text Amount
            const textSpan = document.createElement('span');
            textSpan.textContent = '$' + player.chips;
            el.appendChild(textSpan);
            
            // Chip Visuals
            const chipContainer = document.createElement('div');
            chipContainer.className = 'chip-container';
            
            let amount = player.chips;
            // Simplified stack logic: 1 chip per denomination unit roughly
            // Gold(5000), Black(1000), Red(500), Blue(100), Green(25)
            
            const addChip = (color, count) => {
                for(let i=0; i<Math.min(count, 5); i++) { // Cap visual stack at 5 per color
                    const chip = document.createElement('div');
                    chip.className = `poker-chip ${color}`;
                    chip.style.marginTop = i > 0 ? '-14px' : '0';
                    chipContainer.appendChild(chip);
                }
            };
            
            const golds = Math.floor(amount / 5000); amount %= 5000;
            const blacks = Math.floor(amount / 1000); amount %= 1000;
            const reds = Math.floor(amount / 500); amount %= 500;
            const blues = Math.floor(amount / 100); amount %= 100;
            
            if (golds > 0) addChip('gold', golds);
            if (blacks > 0) addChip('black', blacks);
            if (reds > 0) addChip('red', reds);
            if (blues > 0) addChip('blue', blues);
            
            el.appendChild(chipContainer);
        }
        
        if (player.id === 0) {
            const max = player.chips;
            const slider = document.getElementById('bet-slider');
            if (slider) slider.max = max;
        }
    }

    animateAvatar(playerId, action) {
        const avatar = document.querySelector(`#seat-${playerId} .player-avatar`);
        if (!avatar) return;
        
        // Remove old classes
        avatar.classList.remove('avatar-anim-fold', 'avatar-anim-raise', 'avatar-anim-win', 'avatar-anim-think');
        
        if (action === 'fold') avatar.classList.add('avatar-anim-fold');
        if (action === 'raise' || action === 'all-in') avatar.classList.add('avatar-anim-raise');
        if (action === 'win') avatar.classList.add('avatar-anim-win');
    }

    setPlayerStatus(playerId, text) {
        const info = document.querySelector(`#seat-${playerId} .player-info`);
        if (!info) return;
        
        let statusEl = info.querySelector('.status-text');
        if (!statusEl) {
            statusEl = document.createElement('div');
            statusEl.className = 'status-text';
            info.appendChild(statusEl);
        }
        
        statusEl.textContent = text;
        const avatar = document.querySelector(`#seat-${playerId} .player-avatar`);
        if (text) avatar.classList.add('avatar-anim-think');
        else avatar.classList.remove('avatar-anim-think');
    }

    updateDealer(dealerIndex) {
        // Move dealer button
        // Simple visual update, or animation
        // For now, static or simple transition
    }

    updatePot(amount) {
        document.getElementById('main-pot').textContent = '$' + amount;
        this.playSound('chip');
        
        // Update slider max
        const user = this.game.players[0];
        if (user) {
            const max = user.chips;
            const slider = document.getElementById('bet-slider');
            slider.max = max;
        }
    }

    dealCards(players) {
        // Clear old cards
        document.querySelectorAll('.player-cards').forEach(el => el.innerHTML = '');
        
        players.forEach(p => {
            const container = document.querySelector(`#seat-${p.id} .player-cards`);
            if (!container) return;

            p.hand.forEach((card, i) => {
                const cardEl = document.createElement('div');
                cardEl.className = 'card back'; // Start face down
                
                if (!p.isBot || p.id === 0) { // Show user cards immediately (or animate flip)
                    // Actually, show user cards face up
                    if (p.id === 0) {
                        this.renderCardFace(cardEl, card);
                    }
                }
                
                // Animation delay
                cardEl.style.opacity = '0';
                container.appendChild(cardEl);
                
                setTimeout(() => {
                    this.playSound('card');
                    cardEl.style.opacity = '1';
                    cardEl.style.marginTop = '0px';
                }, i * 200 + p.id * 100);
            });
        });
    }

    renderCardFace(el, card) {
        el.className = `card ${card.color}`;
        el.innerHTML = `
            <div class="card-rank">${card.rank}</div>
            <div class="card-suit">${card.suit}</div>
            <div class="card-rank-bot">${card.rank}</div>
        `;
    }

    updateCommunityCards(cards) {
        const slots = document.querySelectorAll('#community-cards .card-slot');
        slots.forEach((slot, i) => {
            slot.innerHTML = '';
            if (cards[i]) {
                const cardEl = document.createElement('div');
                this.renderCardFace(cardEl, cards[i]);
                slot.appendChild(cardEl);
                // Animate entry
                cardEl.animate([
                    { transform: 'scale(0.8)', opacity: 0 },
                    { transform: 'scale(1)', opacity: 1 }
                ], { duration: 300 });
            }
        });
    }

    highlightPlayer(index) {
        document.querySelectorAll('.seat').forEach(s => s.classList.remove('active'));
        const seat = document.getElementById(`seat-${index}`);
        if (seat) seat.classList.add('active');
        
        // Hide previous actions
        document.querySelectorAll('.player-action').forEach(a => a.classList.remove('show'));
    }

    enableControls(player, currentBet) {
        const controls = document.getElementById('betting-controls');
        controls.classList.add('active');
        
        const toCall = currentBet - player.currentBet;
        
        document.getElementById('btn-check').style.display = toCall === 0 ? 'inline-block' : 'none';
        document.getElementById('btn-call').style.display = toCall > 0 ? 'inline-block' : 'none';
        document.getElementById('call-amount').textContent = '$' + toCall;
        
        // Slider logic
        const slider = document.getElementById('bet-slider');
        slider.min = this.game.minRaise;
        slider.value = this.game.minRaise;
        document.getElementById('bet-val-display').textContent = '$' + slider.value;
    }

    showAction(player, action) {
        const el = document.querySelector(`#seat-${player.id} .player-action`);
        if (el) {
            el.textContent = action;
            el.classList.add('show');
        }
        
        if (player.id === 0) {
            document.getElementById('betting-controls').classList.remove('active');
        }
    }

    updateHandStrength(strength) {
        document.getElementById('hand-strength').textContent = strength;
    }

    showShowdown(results) {
        results.forEach(item => {
            const p = item.player;
            if (p.isBot) {
                const container = document.querySelector(`#seat-${p.id} .player-cards`);
                if (container) {
                    container.innerHTML = '';
                    p.hand.forEach(card => {
                        const el = document.createElement('div');
                        this.renderCardFace(el, card);
                        container.appendChild(el);
                    });
                }
            }
        });
    }

    announceWinner(winner, amount) {
        // Show Modal
        const modal = document.getElementById('winnings-modal');
        if (!modal) {
            // Fallback: just log and continue without modal
            console.log(`Winner: ${winner.name} wins $${amount}!`);
            this.playSound('win');
            return;
        }
        
        const winnerNameEl = document.getElementById('winner-name');
        const winnerAmountEl = document.getElementById('winner-amount');
        const avatarEl = document.getElementById('winner-avatar');
        const handContainer = document.getElementById('winning-hand');
        const handNameEl = document.getElementById('winner-hand-name');
        
        if (winnerNameEl) winnerNameEl.textContent = winner.name;
        if (winnerAmountEl) winnerAmountEl.textContent = '$' + amount;
        
        // Show avatar/hat
        if (avatarEl) {
            avatarEl.innerHTML = '👤'; // Default
            // If customization exists (logic needed to pull hat from player object)
            if (winner.hat && winner.hat !== 'hat_none') {
                const hatItem = this.shopItems.hats.find(i => i.id === winner.hat);
                if (hatItem) {
                    const hatEl = document.createElement('div');
                    hatEl.className = 'avatar-hat';
                    hatEl.style.position = 'relative';
                    hatEl.style.top = '-60px';
                    hatEl.textContent = hatItem.icon;
                    avatarEl.appendChild(hatEl);
                }
            }
        }

        // Show Hand
        if (handContainer) {
            handContainer.innerHTML = '';
            if (winner.hand && winner.hand.length > 0) {
                winner.hand.forEach(card => {
                    const el = document.createElement('div');
                    this.renderCardFace(el, card);
                    handContainer.appendChild(el);
                });
            }
        }

        // Determine hand name (re-evaluate to get name string)
        if (handNameEl && this.game && this.game.communityCards) {
            try {
                const commCards = this.game.communityCards;
                const evalResult = Evaluator.evaluate([...winner.hand, ...commCards]);
                handNameEl.textContent = evalResult.name;
            } catch (e) {
                handNameEl.textContent = 'Winner!';
            }
        }

        modal.classList.add('active');
        this.playSound('win');
        
        // Auto-close after 3.5s to match game loop delay
        setTimeout(() => {
            if (modal.classList.contains('active')) modal.classList.remove('active');
        }, 3500);
    }

    updateTimer(timeLeft, maxTime) {
        const bar = document.getElementById('turn-timer-bar');
        const fill = document.getElementById('timer-fill');
        
        if (!bar || !fill) return; // Guard against missing elements
        
        bar.style.display = 'block';
        const pct = (timeLeft / maxTime) * 100;
        fill.style.width = pct + '%';
        
        if (pct < 30) fill.style.backgroundColor = '#ff3366'; // Red warning
        else fill.style.backgroundColor = 'var(--color-primary)';
    }

    hideTimer() {
        const bar = document.getElementById('turn-timer-bar');
        if (bar) bar.style.display = 'none';
    }

    showGameOver(msg) {
        document.getElementById('game-over-title').textContent = msg;
        document.getElementById('game-over-modal').classList.add('active');
    }

    resetTable() {
        document.querySelectorAll('.player-cards').forEach(el => el.innerHTML = '');
        document.querySelectorAll('.card-slot').forEach(el => el.innerHTML = '');
        document.querySelectorAll('.player-action').forEach(el => el.classList.remove('show'));
        document.getElementById('main-pot').textContent = '$0';
        document.getElementById('hand-strength').textContent = '';
    }

    // ======================
    // SHOP LOGIC
    // ======================
    renderShop(category = 'hats') {
        const grid = document.getElementById('shop-grid');
        grid.innerHTML = '';
        
        const items = this.shopItems[category];
        
        items.forEach(item => {
            const el = document.createElement('div');
            el.className = 'shop-item';
            
            const owned = this.inventory[category].includes(item.id);
            const equipped = this.equipped[category.slice(0, -1)] === item.id; // hat, glove, felt
            
            if (owned) {
                const badge = document.createElement('div');
                badge.className = 'owned-badge';
                el.appendChild(badge);
            }
            
            if (equipped) el.classList.add('active');
            
            let iconDisplay = item.icon || '';
            if (category === 'felts') {
                iconDisplay = `<div style="width: 30px; height: 30px; background: ${item.color}; border-radius: 50%; margin: 0 auto;"></div>`;
            }
            
            el.innerHTML += `
                <span class="item-icon">${iconDisplay}</span>
                <span class="item-name">${item.name}</span>
                <span class="item-price">${owned ? 'OWNED' : '$' + item.price}</span>
            `;
            
            el.onclick = () => this.handleShopClick(item, category, owned);
            grid.appendChild(el);
        });
    }

    handleShopClick(item, category, owned) {
        const player = this.game.players[0];
        
        if (owned) {
            // Equip
            const type = category.slice(0, -1); // hats -> hat
            this.equipped[type] = item.id;
            this.applyCustomization();
            this.renderShop(category);
        } else {
            // Buy
            if (player.chips >= item.price) {
                player.chips -= item.price;
                this.inventory[category].push(item.id);
                this.updatePlayerChips(player);
                this.renderShop(category);
            } else {
                alert("Not enough chips!");
            }
        }
    }

    applyCustomization() {
        // Apply Felt
        const feltId = this.equipped.felt;
        const feltItem = this.shopItems.felts.find(i => i.id === feltId);
        if (feltItem) {
            document.querySelector('.table-felt').style.backgroundColor = feltItem.color;
        }
        
        // Apply Hat to User (Visual only for now, could add DOM element)
        const hatId = this.equipped.hat;
        const hatItem = this.shopItems.hats.find(i => i.id === hatId);
        const userAvatar = document.querySelector('#seat-0 .player-avatar');
        
        // Remove existing hat
        const existingHat = userAvatar.querySelector('.avatar-hat');
        if (existingHat) existingHat.remove();
        
        if (hatItem && hatItem.id !== 'hat_none') {
            const hatEl = document.createElement('div');
            hatEl.className = 'avatar-hat';
            hatEl.textContent = hatItem.icon;
            userAvatar.appendChild(hatEl);
        }
    }
}
