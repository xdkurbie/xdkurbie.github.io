const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score-display');
const menuScreen = document.getElementById('menu-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');
const finalScoreSpan = document.getElementById('final-score');
const highscoreList = document.getElementById('highscore-list');
const playerNameInput = document.getElementById('player-name');

// Game constants
const GRAVITY = 0.25;
const FLAP_STRENGTH = -4.5;
const PIPE_SPEED = 2;
const PIPE_SPAWN_RATE = 1500; // ms
const PIPE_WIDTH = 60;
const PIPE_GAP = 160;
const STUDENT_SIZE = 34;

// Game state
let gameRunning = false;
let score = 0;
let student = {
    x: 50,
    y: 300,
    velocity: 0,
    rotation: 0
};
let pipes = [];
let lastPipeTime = 0;
let animationId;

// Initialize highscores
let highscores = JSON.parse(localStorage.getItem('flappyHighscores')) || [
    { name: 'Prof. Snape', score: 20 },
    { name: 'Einstein', score: 15 },
    { name: 'Newton', score: 10 }
];

function updateLeaderboard() {
    highscoreList.innerHTML = '';
    highscores.sort((a, b) => b.score - a.score);
    highscores.slice(0, 10).forEach((entry, index) => {
        const row = document.createElement('div');
        row.className = 'score-row';
        row.innerHTML = `<span>${index + 1}. ${entry.name}</span><span>${entry.score}</span>`;
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
    score = 0;
    scoreDisplay.innerText = '0';
    lastPipeTime = performance.now();
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
}

function drawStudent() {
    ctx.save();
    ctx.translate(student.x + STUDENT_SIZE / 2, student.y + STUDENT_SIZE / 2);
    
    // Rotate based on velocity
    student.rotation = Math.min(Math.PI / 4, Math.max(-Math.PI / 4, student.velocity * 0.1));
    ctx.rotate(student.rotation);

    // Draw Student Body (Yellow Circle/Face)
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
    ctx.strokeStyle = '#212121';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Eyes
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(-6, -2, 3, 0, Math.PI * 2);
    ctx.arc(6, -2, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
}

function drawPipes() {
    pipes.forEach(pipe => {
        // Building design (Pipes)
        ctx.fillStyle = '#546E7A';
        ctx.strokeStyle = '#263238';
        ctx.lineWidth = 3;

        // Top building
        ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
        ctx.strokeRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
        
        // Windows on top building
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

        // Windows on bottom building
        ctx.fillStyle = '#FFF59D';
        for(let i = bottomY + 20; i < canvas.height - 20; i += 40) {
            ctx.fillRect(pipe.x + 10, i, 15, 15);
            ctx.fillRect(pipe.x + 35, i, 15, 15);
        }
    });
}

function update() {
    if (!gameRunning) return;

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

        // Remove off-screen pipes
        if (pipe.x + PIPE_WIDTH < 0) {
            pipes.splice(index, 1);
        }
    });

    // Drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background clouds (simplified)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath(); ctx.arc(100, 100, 30, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(130, 110, 40, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(300, 200, 35, 0, Math.PI * 2); ctx.fill();

    drawPipes();
    drawStudent();

    animationId = requestAnimationFrame(update);
}

function flap() {
    if (gameRunning) {
        student.velocity = FLAP_STRENGTH;
    }
}

function startGame() {
    menuScreen.classList.add('hidden');
    gameOverScreen.classList.add('hidden');
    gameRunning = true;
    resetGame();
    update();
}

function endGame() {
    gameRunning = false;
    cancelAnimationFrame(animationId);
    gameOverScreen.classList.remove('hidden');
    finalScoreSpan.innerText = score;
    saveScore(playerNameInput.value, score);
    updateLeaderboard();
}

// Controls
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        if (!gameRunning && menuScreen.classList.contains('hidden')) {
            // Already died, space should restart if menu is hidden? 
            // Better to use button for now to avoid accidental double starts
        } else {
            flap();
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

// Init
updateLeaderboard();
