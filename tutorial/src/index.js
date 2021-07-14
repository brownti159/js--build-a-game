
import Game from './game.js';

let canvas = document.getElementById("gameScreen")
let ctx = canvas.getContext("2d")

const GAME_WIDTH = 800;
const GAME_HEIGHT= 600;


let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();


let lastTime = 0;

//images
let imgball = document.getElementById('img_ball')

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop);