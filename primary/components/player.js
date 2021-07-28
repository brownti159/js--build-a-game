import Game from "./game.js"


export default class Player{
    constructor(game) {
        this.img = document.getElementById('player')
        this.beam = document.getElementById('shoot')
        
        
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.width = 20;
        this.height = 20;
        
        this.maxSpeed = 5;
        this.speed = 0;

        this.position = {
            x: game.gameWidth - this.width - 650,
            y: game.gameHeight/  2 - this.height / 2,
            
        };
    }
    moveUp() {
        this.speed = -this.maxSpeed;
    }

    moveDown() {
        this.speed = this.maxSpeed;
    }
    stop(){
        this.speed = 0;
    }
    shoot(){

    }

    draw(ctx){

        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)

    }

        

    
    update(deltaTime) {
        if (!deltaTime) return;
        
        this.position.y += this.speed;
        
        // if (this.position.y > this.gameHeight) this.position.y = this.gameHeight;
        if (this.position.y < 0) this.position.y = 0;

        if (this.position.y + this.height > this.gameHeight)
        this.position.y = this.gameHeight - this.height;
        
        }
}


