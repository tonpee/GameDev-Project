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
    this.startTime = this.time.now;

    EnemiesMovement.create.call(this);
  }
  update() {
    PlayerMovement.update.call(this);
    EnemiesMovement.update.call(this);
    const elapsedTime = this.time.now - this.startTime;
    //show time in milliseconds
    if (elapsedTime % 1000 === 0) {
        console.log(elapsedTime);
    }

    if (elapsedTime % 6500 === 0) {
        EnemiesMovement.create.call(this);
    }
  }
}

export default JellyGame;