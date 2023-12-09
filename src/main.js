import "phaser";
import Phaser from "phaser";
// import jellyGame from './newGame/jellyGame';
import RestingPageScene from "./scenes/RestingPageScene";
import JellyGame from "./scenes/JellyGame";
import GameOver from "./scenes/GameOver";

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  parent: "content",
  backgroundColor: "#000",
  physics: {
    default: "arcade",
    arcade: {
      debug: false, // true show hitbox
    },
  },
  scene: [RestingPageScene, JellyGame, GameOver],
};
let game = new Phaser.Game(config);