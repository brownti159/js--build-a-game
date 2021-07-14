import {detectionCollision} from './collisionDectection.js';
export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById('img_brick');

        this.game = game;

        this.position = position;
        
        this.width = 80
        this.height = 24;

        this.markForDeletion = false;


    }

    update(deltaTime) {
        if(detectionCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y

            this.markForDeletion = true;
        }

    }
    
    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )

    }

}