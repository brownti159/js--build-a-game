import {detectionCollision} from './collisionDectection.js'

export default class Ball {

    constructor(game){
        this.image = document.getElementById("img_ball");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = {x:10, y: 400};
        this.speed = { x: 4, y: 2};
        this.size = 16;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime) {
        console.log(this.game.paddle.position.x);
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

    if(detectionCollision(this, this.game.paddle)) {       
        
        this.speed.y = -this.speed.y;
        this.position.y = this.game.paddle.position.y - this.size
    }
    }
}