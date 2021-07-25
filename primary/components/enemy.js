export default class Enemy {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.img = document.getElementById('enemy')

        this.gamewidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;

        this.width = 20;
        this.height = 20;

        this.position = {
            x: this.gamewidth - this.width,
            y: this.gameHeight / 2,
        };
        this.speed = 3
    };

    draw(ctx){
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime){
        this.position.x += -this.speed
    }
}