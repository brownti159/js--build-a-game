export default class Player{
    constructor(game) {
        this.img = document.getElementById('player')
        

        this.gameWidth =700;
        this.gameHeight =350;

        this.width = 20;
        this.height = 20;
        
        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: this.gameWidth - this.width -10,
            y: this.gameHeight/  2 - this.height / 2,
        };
    }
    moveUP() {
        this.speed = -this.maxSpeed;
    }

    moveDown() {
        this.speed = this.maxSpeed;
    }
    stop(){
        this.speed = 0;
    }

    draw(ctx){
        console.log("player.draw")
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)

    }

        

    
    update(deltaTime) {
        
        this.position.x += this.speed;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth)
            this.position.x = this.gameWidth - this.width;
        }
}


