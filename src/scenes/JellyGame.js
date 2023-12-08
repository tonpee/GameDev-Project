import Phaser from "phaser";
import * as PlayerMovement from "../movement/PlayerMovement";
import * as EnemiesMovement from "../movement/EnemiesMovement";

class JellyGame extends Phaser.Scene {
  constructor() {
    super({
      key: "JellyGame",
    });
  }
  preload() {
    this.load.image("background", "./../../assets/background/underwater-fantasy-preview.png");
    PlayerMovement.preload.call(this);
    EnemiesMovement.preload.call(this);
  }
  create() {
    this.bg = this.add.tileSprite(0, 0, 768, 192, "background").setOrigin(0, 0).setDepth(-999).setScale(4);
    PlayerMovement.create.call(this);
    EnemiesMovement.createEnemies.call(this);
  }
  update() {
    PlayerMovement.update.call(this);
    EnemiesMovement.update.call(this);
  }
}

export default JellyGame;