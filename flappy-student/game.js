const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score-display');
const bestScoreDisplay = document.getElementById('best-score');
const menuScreen = document.getElementById('menu-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const pauseScreen = document.getElementById('pause-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const menuButton = document.getElementById('menu-button');
const pauseButton = document.getElementById('pause-button');
const resumeButton = document.getElementById('resume-button');
const quitButton = document.getElementById('quit-button');
const muteToggle = document.getElementById('mute-toggle');
const finalScoreSpan = document.getElementById('final-score');
const newRecordEl = document.getElementById('new-record');
const highscoreList = document.getElementById('highscore-list');
const playerNameInput = document.getElementById('player-name');

// Game constants
const GRAVITY = 0.25;
const FLAP_STRENGTH = -4.5;
let PIPE_SPEED = 2;
const BASE_PIPE_SPEED = 2;
const PIPE_SPAWN_RATE = 1500;
const PIPE_WIDTH = 60;
const PIPE_GAP = 160;
const STUDENT_SIZE = 34;

// Game state
let gameRunning = false;
let gamePaused = false;
let score = 0;
let bestScore = 0;
let student = {
    x: 50,
    y: 300,
    velocity: 0,
    rotation: 0
};
let pipes = [];
let powerups = [];
let particles = [];
let clouds = [];
let lastPipeTime = 0;
let animationId;
let isMuted = false;

// Cloud system for parallax background
function initClouds() {
    clouds = [];
    for (let i = 0; i < 5; i++) {
        clouds.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas.height * 0.6),
            size: 20 + Math.random() * 30,
            speed: 0.2 + Math.random() * 0.3
        });
    }
}

// Particle system for effects
class Particle {
    constructor(x, y, color, size = 3) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.color = color;
        this.size = size;
        this.life = 1;
        this.decay = 0.02;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1;
        this.life -= this.decay;
    }

    draw() {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function createScoreParticles(x, y) {
    const colors = ['#FFD700', '#FFA500', '#FF6347'];
    for (let i = 0; i < 15; i++) {
        particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)], 4));
    }
}

// Simple sound generation (Web Audio API)
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(frequency, duration, type = 'sine') {
    if (isMuted) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

function flapSound() {
    playSound(400, 0.1, 'square');
}

function scoreSound() {
    playSound(800, 0.15, 'sine');
    setTimeout(() => playSound(1000, 0.1, 'sine'), 50);
}

function gameOverSound() {
    playSound(200, 0.3, 'sawtooth');
    setTimeout(() => playSound(150, 0.4, 'sawtooth'), 150);
}

// Initialize highscores
let highscores = JSON.parse(localStorage.getItem('flappyHighscores')) || [
    { name: 'Prof. Snape', score: 20 },
    { name: 'Einstein', score: 15 },
    { name: 'Newton', score: 10 }
];

// Load best score
bestScore = Math.max(...highscores.map(h => h.score), 0);
bestScoreDisplay.innerText = bestScore;

function updateLeaderboard() {
    highscoreList.innerHTML = '';
    highscores.sort((a, b) => b.score - a.score);
    highscores.slice(0, 10).forEach((entry, index) => {
        const row = document.createElement('div');
        row.className = 'score-row';
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        row.innerHTML = `<span>${medal} ${entry.name}</span><span>${entry.score}</span>`;
        highscoreList.appendChild(row);
    });
}

function saveScore(name, score) {
    if (!name) name = 'Anonymous';
    highscores.push({ name, score });
    highscores.sort((a, b) => b.score - a.score);
    highscores = highscores.slice(0, 10);
    localStorage.setItem('flappyHighscores', JSON.stringify(highscores));
}

function resetGame() {
    student.y = 300;
    student.velocity = 0;
    student.rotation = 0;
    pipes = [];
    powerups = [];
    particles = [];
    score = 0;
    PIPE_SPEED = BASE_PIPE_SPEED;
    scoreDisplay.innerText = '0';
    lastPipeTime = performance.now();
    initClouds();
}

function spawnPipe() {
    const minHeight = 50;
    const maxHeight = canvas.height - PIPE_GAP - minHeight;
    const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    
    pipes.push({
        x: canvas.width,
        topHeight: topHeight,
        passed: false
    });

    // Randomly spawn powerups
    if (Math.random() < 0.15) {
        const powerupY = topHeight + PIPE_GAP / 2;
        powerups.push({
            x: canvas.width + PIPE_WIDTH / 2,
            y: powerupY,
            type: Math.random() < 0.5 ? 'book' : 'coffee',
            collected: false
        });
    }
}

function drawClouds() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    clouds.forEach(cloud => {
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size * 0.6, cloud.y - cloud.size * 0.3, cloud.size * 0.8, 0, Math.PI * 2);
        ctx.arc(cloud.x + cloud.size * 1.2, cloud.y, cloud.size * 0.9, 0, Math.PI * 2);
        ctx.fill();

        cloud.x -= cloud.speed;
        if (cloud.x + cloud.size * 2 < 0) {
            cloud.x = canvas.width + cloud.size;
            cloud.y = Math.random() * (canvas.height * 0.6);
        }
    });
}

function drawStudent() {
    ctx.save();
    ctx.translate(student.x + STUDENT_SIZE / 2, student.y + STUDENT_SIZE / 2);
    
    student.rotation = Math.min(Math.PI / 4, Math.max(-Math.PI / 4, student.velocity * 0.1));
    ctx.rotate(student.rotation);

    // Student Body
    ctx.fillStyle = '#FFD54F';
    ctx.beginPath();
    ctx.arc(0, 0, STUDENT_SIZE / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Graduation Cap
    ctx.fillStyle = '#212121';
    ctx.fillRect(-STUDENT_SIZE / 2 - 2, -STUDENT_SIZE / 2, STUDENT_SIZE + 4, 10);
    ctx.beginPath();
    ctx.moveTo(0, -STUDENT_SIZE / 2);
    ctx.lineTo(STUDENT_SIZE / 2 + 10, -STUDENT_SIZE / 2 - 5);
    ctx.strokeStyle = '#FFC107';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Eyes
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(-6, -2, 3, 0, Math.PI * 2);
    ctx.arc(6, -2, 3, 0, Math.PI * 2);
    ctx.fill();

    // Smile
    ctx.beginPath();
    ctx.arc(0, 2, 8, 0, Math.PI);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
}

function drawPipes() {
    pipes.forEach(pipe => {
        ctx.fillStyle = '#546E7A';
        ctx.strokeStyle = '#263238';
        ctx.lineWidth = 3;

        // Top building
        ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
        ctx.strokeRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
        
        // Windows
        ctx.fillStyle = '#FFF59D';
        for(let i = 20; i < pipe.topHeight - 20; i += 40) {
            ctx.fillRect(pipe.x + 10, i, 15, 15);
            ctx.fillRect(pipe.x + 35, i, 15, 15);
        }

        // Bottom building
        const bottomY = pipe.topHeight + PIPE_GAP;
        const bottomHeight = canvas.height - bottomY;
        ctx.fillStyle = '#546E7A';
        ctx.fillRect(pipe.x, bottomY, PIPE_WIDTH, bottomHeight);
        ctx.strokeRect(pipe.x, bottomY, PIPE_WIDTH, bottomHeight);

        // Windows
        ctx.fillStyle = '#FFF59D';
        for(let i = bottomY + 20; i < canvas.height - 20; i += 40) {
            ctx.fillRect(pipe.x + 10, i, 15, 15);
            ctx.fillRect(pipe.x + 35, i, 15, 15);
        }
    });
}

function drawPowerups() {
    powerups.forEach(powerup => {
        if (powerup.collected) return;

        ctx.save();
        ctx.translate(powerup.x, powerup.y);
        
        if (powerup.type === 'book') {
            // Draw book
            ctx.fillStyle = '#E91E63';
            ctx.fillRect(-10, -8, 20, 16);
            ctx.strokeStyle = '#C2185B';
            ctx.lineWidth = 2;
            ctx.strokeRect(-10, -8, 20, 16);
            ctx.fillStyle = '#fff';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('📖', 0, 4);
        } else {
            // Draw coffee
            ctx.fillStyle = '#8D6E63';
            ctx.fillRect(-8, -6, 16, 12);
            ctx.fillStyle = '#6D4C41';
            ctx.fillRect(-8, -10, 16, 4);
            ctx.fillStyle = '#fff';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('☕', 0, 2);
        }
        
        ctx.restore();
    });
}

function updatePowerups() {
    powerups.forEach((powerup, index) => {
        powerup.x -= PIPE_SPEED;

        // Collision check
        if (!powerup.collected &&
            Math.abs(student.x + STUDENT_SIZE / 2 - powerup.x) < 20 &&
            Math.abs(student.y + STUDENT_SIZE / 2 - powerup.y) < 20) {
            
            powerup.collected = true;
            score += 5;
            scoreDisplay.innerText = score;
            scoreSound();
            createScoreParticles(powerup.x, powerup.y);
        }

        if (powerup.x < -20) {
            powerups.splice(index, 1);
        }
    });
}

function updateParticles() {
    particles = particles.filter(p => p.life > 0);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
}

function update() {
    if (!gameRunning || gamePaused) return;

    // Increase difficulty gradually
    PIPE_SPEED = BASE_PIPE_SPEED + Math.floor(score / 10) * 0.2;

    // Student physics
    student.velocity += GRAVITY;
    student.y += student.velocity;

    // Boundary check
    if (student.y + STUDENT_SIZE > canvas.height || student.y < 0) {
        endGame();
    }

    // Pipe movement
    const now = performance.now();
    if (now - lastPipeTime > PIPE_SPAWN_RATE) {
        spawnPipe();
        lastPipeTime = now;
    }

    pipes.forEach((pipe, index) => {
        pipe.x -= PIPE_SPEED;

        // Scoring
        if (!pipe.passed && pipe.x + PIPE_WIDTH < student.x) {
            score++;
            scoreDisplay.innerText = score;
            pipe.passed = true;
            scoreSound();
            createScoreParticles(student.x, student.y);

            // Update best score
            if (score > bestScore) {
                bestScore = score;
                bestScoreDisplay.innerText = bestScore;
            }
        }

        // Collision check
        if (
            student.x + STUDENT_SIZE - 5 > pipe.x && 
            student.x + 5 < pipe.x + PIPE_WIDTH
        ) {
            if (student.y + 5 < pipe.topHeight || student.y + STUDENT_SIZE - 5 > pipe.topHeight + PIPE_GAP) {
                endGame();
            }
        }

        if (pipe.x + PIPE_WIDTH < 0) {
            pipes.splice(index, 1);
        }
    });

    updatePowerups();

    // Drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawClouds();
    drawPipes();
    drawPowerups();
    drawStudent();
    updateParticles();

    animationId = requestAnimationFrame(update);
}

function flap() {
    if (gameRunning && !gamePaused) {
        student.velocity = FLAP_STRENGTH;
        flapSound();
    }
}

function startGame() {
    menuScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    pauseScreen.classList.add('hidden');
    pauseButton.classList.remove('hidden');
    gameRunning = true;
    gamePaused = false;
    resetGame();
    update();
}

function pauseGame() {
    if (!gameRunning) return;
    gamePaused = true;
    pauseScreen.classList.remove('hidden');
    pauseButton.innerText = '▶';
}

function resumeGame() {
    gamePaused = false;
    pauseScreen.classList.add('hidden');
    pauseButton.innerText = '⏸';
    update();
}

function quitToMenu() {
    gameRunning = false;
    gamePaused = false;
    cancelAnimationFrame(animationId);
    pauseScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    pauseButton.classList.add('hidden');
    menuScreen.classList.remove('hidden');
}

function endGame() {
    gameRunning = false;
    gamePaused = false;
    cancelAnimationFrame(animationId);
    gameOverSound();
    pauseButton.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    finalScoreSpan.innerText = score;
    
    const playerName = playerNameInput.value || 'Anonymous';
    saveScore(playerName, score);
    
    // Check if new record
    const isNewRecord = score > 0 && score >= highscores[0].score;
    if (isNewRecord) {
        newRecordEl.classList.remove('hidden');
    } else {
        newRecordEl.classList.add('hidden');
    }
    
    updateLeaderboard();
}

// Controls
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (gamePaused) {
            resumeGame();
        } else {
            flap();
        }
    }
    if (e.code === 'Escape' || e.code === 'KeyP') {
        if (gameRunning && !gamePaused) {
            pauseGame();
        } else if (gamePaused) {
            resumeGame();
        }
    }
});

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    flap();
});

canvas.addEventListener('mousedown', flap);

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
menuButton.addEventListener('click', quitToMenu);
pauseButton.addEventListener('click', () => {
    if (gamePaused) {
        resumeGame();
    } else {
        pauseGame();
    }
});
resumeButton.addEventListener('click', resumeGame);
quitButton.addEventListener('click', quitToMenu);

muteToggle.addEventListener('click', () => {
    isMuted = !isMuted;
    muteToggle.innerText = isMuted ? '🔇' : '🔊';
    muteToggle.classList.toggle('muted');
});

// Init
initClouds();
updateLeaderboard();
