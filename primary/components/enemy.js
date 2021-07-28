import Game from "./game.js"

export default class Enemy {
    constructor(game) {
        this.img = document.getElementById('enemy')

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.width = 20;
        this.height = 20;

        this.position = {
            x: game.gamewidth,
            y: Math.floor(Math.random() * game.gameHeight),
        };
        this.speed = 3

    };
    
    

    draw(ctx){
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)
    };

    update(deltaTime){
        this.position.x += -this.speed
    };
};
