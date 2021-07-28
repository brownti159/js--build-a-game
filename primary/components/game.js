import Enemy from "./enemy.js"
import Keyboarder from "./keyboarder.js"
import Player from "./player.js"

export default class Game {
    constructor(GAME_WIDTH, GAME_HEIGHT) {
        this.gameWidth = GAME_WIDTH
        this.gameHeight = GAME_HEIGHT
    }
    
    start(){
        console.log(this)
        
        this.player = new Player(this)   
        new Keyboarder(this.player, this);
        //generate enemies
        let Enemies = [];

        let generatetimer = setInterval(generate, 1000);
        let thisgame  = this

        function generate(game) {
            
            for (let i = 0; i < 7; i++) {
                let e = new Enemy(game);
                // e.draw(ctx)
                // e.update(deltaTime)
                Enemies.push(e);
            };
        
        };
        generate(thisgame)

    };

    draw(ctx){
        console.log(ctx)
        this.player.draw(ctx)
        for (let enemy of Enemies) {
            enemy.draw(ctx);
        };
    };

    update(deltaTime){
        this.player.draw(deltaTime)
        for (let enemy of Enemies) {
            enemy.update(deltaTime)
        };
    };

};