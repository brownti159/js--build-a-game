class Player{
    constructor(game) {
        this.gameWidth = game.gameWidth;

        this.width = 50;
        this.height = 50;
        
        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: game.gameWidth - this.width -10,
            y: game.gameHeight/  2 - this.height / 2,
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

    draw(ctx) {
        // ctx.fillStyle = Image(url('./img/player.png'))
        

    }
    update(deltaTime) {
        
        this.position.x += this.speed;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth)
            this.position.x = this.gameWidth - this.width;
    }
}

