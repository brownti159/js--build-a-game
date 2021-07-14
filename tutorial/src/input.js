export default class InputHandler {

    constructor(paddle) {
        //moves paddle when key is pressed
        document.addEventListener("keydown", event => {
            
            switch(event.keyCode){
                case 37:
                    paddle.moveLeft();
                    break;

                case 39:
                    paddle.moveRight();
                    break;

                case 27:
                    game.togglepause();
                    break;
            }
        });

        // stops paddle when key is released
        document.addEventListener("keyup", event => {
            
            switch(event.keyCode){
                case 37:
                    if(paddle.speed < 0) paddle.stop();
                    break;

                case 39:
                    if(paddle.speed > 0 ) paddle.stop();
                    break;
            }
        });
    }
}