let boardWidth = 360;
let boardHeight = 640;
let backGroundImg = new Image();
backGroundImg.src = "./images/flappybirdbg.png";
let inputLocked = false;

let handleKeyDown = () => { };

document.addEventListener("keydown", handleKeyDown);

let GAME_STATE = {
    MENU: "menu",
    PLAYING: "playing",
    GAME_OVER: "gameOver",
};

let currentState = GAME_STATE.MENU;

let playButton = {
    x: boardWidth / 2 - 115.5 / 2,
    y: boardHeight,
    width: 115,
    height: 64
};

let logo = {
    x: boardWidth / 2 - 300 / 2,
    y: boardHeight / 4,
    widht: 300,
    height: 100
};

let flappyBirdTextImg = new Image();
flappyBirdTextImg.src = "./images/flappyBirdLogo.png";

let gameOverImag = new Image();
gameOverImag.src = "./images/flappy-gameover.png";

let bird = {
    x: 50,
    y: boardHeight / 2,
    width: 40,
    height: 30
}
let velocityY = 0;
let velocityX = -2;
let velocity = 0;
let gravity = 0.5;
let birdY = boardHeight / 2;
let pipeWidth = 50;
let pipeGap = 200;
let pipeArray = [];
let pipeIntervalId;

function placePipes() {
    createPipes();
}

// function createPipes() {
//     let maxTopPipeHeight = boardHeight - pipeGap - 50;
//     let maxTopPipeHeight =
// }