export default class Enemy {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.img = document.getElementById('enemy')
        // this.enemies = []
        this.gamewidth = GAME_WIDTH;
        this.gameHeight = GAME_HEIGHT;

        this.width = 20;
        this.height = 20;

        this.position = {
            x: this.gamewidth - this.width,
            y: Math.floor(Math.random() * this.gameHeight - this.height),
        };
        console.log(this.position)
        this.speed = 3
    };

    draw(ctx){
        ctx.drawImage(this.enimies, this.position.x, this.position.y, this.width, this.height)
        // this.enemies = add.group();
	    // this.enemies.createMultiple(25, 'enemy');
    }

    update(deltaTime){
        this.position.x += -this.speed
    }
}