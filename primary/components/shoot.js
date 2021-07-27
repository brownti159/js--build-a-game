import Player from "./player.js"

export default class Shoot {
    constructor(GAMEWIDTH, GAMEHEIGHT, Player) {
        this.shoot = document.getElementById('shoot')
        this.gamewidth = gameWidth
        this.gameHeight = gameHeight
        this.width = 10
        this.height = 5
        this. speed = 3
        this.postion = {
            x: player.position.x + this.width,
            y: player.position.y,
        }

    }
    update(deltaTime){
        this.position.x += this.speed

    }

    draw(ctx){
        ctx.drawImage(this.shoot, this.position.x, this.position.y, this.width, this.height)


    }
}