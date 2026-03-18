document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.querySelector('.game-container');
  const ship = document.querySelector('.ship');
  const scoreDisplay = document.querySelector('.score');
  const startScreen = document.querySelector('.start-screen');
  const gameOverScreen = document.querySelector('.game-over-screen');
  const startBtn = document.querySelector('.start-btn');
  const restartBtn = document.querySelector('.restart-btn');
  const finalScore = document.querySelector('.final-score');

  let shipLeft = 50;
  let shipBottom = 250;
  let gravity = 2.5;
  let isGameOver = false;
  let score = 0;
  let speed = 2;

  function startGame() {
    shipBottom = 250;
    ship.style.bottom = shipBottom + 'px';
    startScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';
    isGameOver = false;
    score = 0;
    speed = 2;
    scoreDisplay.innerHTML = score;
    document.addEventListener('keydown', control);
    document.addEventListener('click', control);
    gameLoop();
    generateObstacles();
  }

  function control(e) {
    if (e.keyCode === 32 || e.type === 'click') {
      jump();
    }
  }

  function jump() {
    if (shipBottom < window.innerHeight - 60) shipBottom += 50;
    ship.style.bottom = shipBottom + 'px';
  }

  function gameLoop() {
    if (isGameOver) return;

    shipBottom -= gravity;
    ship.style.bottom = shipBottom + 'px';

    if (shipBottom <= 0) {
      endGame();
    }

    requestAnimationFrame(gameLoop);
  }

  function generateObstacles() {
    if (isGameOver) return;

    const obstacleWidth = 60;
    const gapHeight = 200;
    const gameHeight = window.innerHeight;
    let obstacleLeft = window.innerWidth;

    const bottomObstacleHeight = Math.random() * (gameHeight - gapHeight - 150) + 50;
    const topObstacleHeight = gameHeight - bottomObstacleHeight - gapHeight;

    const obstacle = document.createElement('div');
    const topObstacle = document.createElement('div');
    obstacle.classList.add('obstacle', 'bottom');
    topObstacle.classList.add('obstacle', 'top');
    gameContainer.appendChild(obstacle);
    gameContainer.appendChild(topObstacle);

    obstacle.style.height = bottomObstacleHeight + 'px';
    obstacle.style.left = obstacleLeft + 'px';
    obstacle.style.width = obstacleWidth + 'px';

    topObstacle.style.height = topObstacleHeight + 'px';
    topObstacle.style.left = obstacleLeft + 'px';
    topObstacle.style.width = obstacleWidth + 'px';

    function moveObstacle() {
      if (isGameOver) return;
      obstacleLeft -= speed;
      obstacle.style.left = obstacleLeft + 'px';
      topObstacle.style.left = obstacleLeft + 'px';

      if (obstacleLeft > 50 && obstacleLeft < 50 + speed) {
        score++;
        scoreDisplay.innerHTML = score;
        const flash = document.createElement('div');
        flash.classList.add('flash-effect');
        gameContainer.appendChild(flash);
        setTimeout(() => {
          gameContainer.removeChild(flash);
        }, 200);

        // Increase speed
        speed += 0.1;
      }

      if (obstacleLeft < -obstacleWidth) {
        gameContainer.removeChild(obstacle);
        gameContainer.removeChild(topObstacle);
      }

      const shipWidth = 50;
      const shipRight = shipLeft + shipWidth;
      const obstacleRight = obstacleLeft + obstacleWidth;

      if (
        shipRight > obstacleLeft && 
        shipLeft < obstacleRight &&
        (shipBottom < bottomObstacleHeight || shipBottom + 30 > bottomObstacleHeight + gapHeight)
      ) {
        endGame();
      }

      if (!isGameOver) {
        requestAnimationFrame(moveObstacle);
      }
    }

    moveObstacle();
    if (!isGameOver) {
      setTimeout(generateObstacles, 3000 / speed);
    }
  }

  function endGame() {
    isGameOver = true;
    finalScore.innerHTML = score;
    gameOverScreen.style.display = 'block';
    document.removeEventListener('keydown', control);
    document.removeEventListener('click', control);
  }

  startBtn.addEventListener('click', startGame);
  restartBtn.addEventListener('click', () => {
    const obstacles = document.querySelectorAll('.obstacle');
    obstacles.forEach(obstacle => gameContainer.removeChild(obstacle));
    startGame();
  });
});
