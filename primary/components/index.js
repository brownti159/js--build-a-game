// import Player from "./player.js";
import Game from "./game.js";
// import Keyboarder from "./keyboarder.js"
// import Enemy from "./enemy.js"

let canvas = document.getElementById("gameScreen")
let ctx = canvas.getContext("2d")

const GAME_WIDTH = 700;
const GAME_HEIGHT= 400;


let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start()
// let player = new Player(GAME_WIDTH, GAME_HEIGHT);
// let enemy = new Enemy(GAME_WIDTH, GAME_HEIGHT);
// new Keyboarder(player);

// game.generate()


// const background = new Image();
// background.src = "./img/bg-700x400.png";

// function animate(){

//     player.draw(ctx)
//     requestAnimationFrame(animate);
// }
// animate()


// //generate enemies
//     let Enemies = [];

//     let generatetimer = setInterval(generate, 1000);
//     function generate() {
//         for (let i = 0; i < 7; i++) {
//             let e = new Enemy(GAME_WIDTH, GAME_HEIGHT);
//             e.draw(ctx)
//             // e.update(deltaTime)
//             e.push;
//             Enemies.push(e);
//         };
//     };
//     generate()

    
    


let lastTime = 0;



function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime)
    console.log(ctx)
    game.draw(ctx)
    // player.update(deltaTime);
    // player.draw(ctx);
    
    // for (let enemy of Enemies) {
    // enemy.draw(ctx);
    // enemy.update(deltaTime)
    // }
    
    requestAnimationFrame(gameLoop)
};

requestAnimationFrame(gameLoop);
// requestAnimationFrame(gameLoop);