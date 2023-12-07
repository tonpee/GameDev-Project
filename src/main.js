import 'phaser';
import Phaser from 'phaser';
// import jellyGame from './newGame/jellyGame';
const config = {
    type : Phaser.AUTO,
    width : 1280,
    height : 720,
    parent : 'content',
    backgroundColor : '#000',
    physics : {
        default : 'arcade',
        arcade : {
            debug : true // true show hitbox
        }
    },
    scene : [
        // jellyGame,
    ]
}
let game = new Phaser.Game(config);