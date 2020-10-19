var canvas = document.getElementById('window');
var ctx = canvas.getContext("2d");
document.addEventListener("keydown", keyPush);

var snake = new Snake();
var apple = new Apple();
var player = new Player();

var grid = 20;

var loop;

canvasRender();

function startGame() {
    document.getElementById("start").classList.add("disabled");
    apple.pickLocation();
    snake.canMove = true;
    gameLoop();
}

function resetGame() {
    document.getElementById("start").classList.remove("disabled");
    ctx.clearReact(0, 0, canvas.width, canvas.height);
    canvasRender();
}

function endGame() {
    alert("Você perdeu mas marcou " + player.score + " pontos!");
    snake.reset();
    apple.reset();
    player.resetScore();
    clearInterval(loop);
    resetGame();
}
 
function game() {
    canvasRender();
   
    isColliding();

    snake.update();
    snake.render();
    apple.render();
    player.renderScore();
}

function canvasRender() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function isColliding() {
    if (apple.x == snake.x && apple.y == snake.y) {
        apple.pickLocation();
        snake.total++;
        player.updateScore(apple.points);
    }
}

function gameLoop() {
    loop = setInterval(game, 1000 / 15);
}

function keyPush(event) {
    switch (event.keyCode) {
        case 87:
            if (snake.vY != 1) snake.dir(0, -1)
            break;
        case 83:
            if (snake.vY != -1) snake.dir(0, 1)
            break;
        case 65:
            if (snake.vX != 1) snake.dir(-1, 0)
            break;
        case 68:
            if (snake.vX != -1) snake.dir(1, 0)
            break;
    }
}