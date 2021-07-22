// const Keyboarder = {
//   keyState: {},
//   isDown: function (keyCode) {
//     return this.keyState[keyCode] === true
//   },
//   on: function (keyCode, callback) {
//     window.addEventListener('keydown', (e) => {
//       if (e.keyCode === keyCode) {
//         callback()
//       }
//     })
//   }
// window.addEventListener('keydown', function (e) {
//   Keyboarder.keyState[e.keyCode] = true
// })

// window.addEventListener('keyup', function (e) {
//   Keyboarder.keyState[e.keyCode] = false
// })

// Keyboarder.KEYS = { LEFT: 37, RIGHT: 39, UP: 38, DOWN: 40, S: 83 }
export default class Keyboarder {

  constructor(player) {
      //moves paddle when key is pressed
      document.addEventListener("keydown", (event) => {

        switch(event.keyCode){
        case 87:
        player.moveUp()
        break;

        case 83:
        player.moveDown()
        break;

        case 68:
        player.shoot()
        break;
        } 

      });
      document.addEventListener("keyup", event => {
        switch (event.keyCode) {
          case 87:
            if (player.speed < 0) player.stop();
            break;
  
          case 83:
            if (player.speed > 0) player.stop();
            break;
        }
      });
    };
}