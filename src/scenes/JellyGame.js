import Phaser from "phaser";
import * as PlayerMovement from "../movement/PlayerMovement";
import * as EnemiesMovement from "../movement/EnemiesMovement";
import GameOver from "./GameOver";
let score = 0;

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
    this.load.image("coin", "./../../assets/coin/Coin.png");
  }
  init() {
    this.events.removeListener("addScore");
    this.startTime = 0;
    score = 0;
  }
  create() {
    this.bg = this.add.tileSprite(0, 0, 768, 192, "background").setOrigin(0, 0).setDepth(-999).setScale(4);
    PlayerMovement.create.call(this);
    this.startTime = this.time.now;
    EnemiesMovement.create.call(this);

    this.coins = this.physics.add.staticGroup();
    this.initCoins(1);
    this.physics.add.overlap(
      this.player,
      this.coins,
      this.collectCoin,
      null,
      this
    );

    // this.physics.add.overlap(
    //   this.player,
    //   this.ell,
    //   this.gameOver,
    //   null,
    //   this
    // );

    // this.physics.add.overlap(
    //   this.player,
    //   this.sail,
    //   this.gameOver,
    //   null,
    //   this
    // );

    this.createEvents();
  }
  update() {
    PlayerMovement.update.call(this);
    EnemiesMovement.update.call(this);

    //show time in milliseconds
    const elapsedTime = this.time.now - this.startTime;
    // console.log(elapsedTime);
    let amountOfEnemies = 4;
    let timeToSpawnEnemies = 6500;

    if (elapsedTime % 500 === 0) {
        console.log(elapsedTime);
    }

    if (elapsedTime % 22000 === 0 || elapsedTime % 22000 === 1) {
        amountOfEnemies++;
        console.log("plus enemies");
        timeToSpawnEnemies -= 150;
        console.log(`timeToSpawnEnemies = ${timeToSpawnEnemies}`);
    }

    if (elapsedTime % timeToSpawnEnemies === 0) {
        for (let i = 0; i <= amountOfEnemies; i++) {
            EnemiesMovement.create.call(this);
        }
        console.log("spawn");
    }
  }

  initCoins(numberOfCoins = 1) {
    for (let i = 0; i < numberOfCoins; i++) {
      const fence = 80;
      const randomX = Phaser.Math.Between(fence, 1280 - fence);
      const randomY = Phaser.Math.Between(fence, 720 - fence);
      this.coins.create(randomX, randomY, "coin").setScale(0.3).setBodySize(30, 37).setOffset(44, 49);
    }
  }

  createEvents() {
    this.events.on(
      'createNewCoin',
      function () {
        // Use delayedCall to add a delay of 1 second (1000 milliseconds) before creating a new coin
        this.time.delayedCall(1000, this.initCoins, [1], this);
      },
      this
    );

    this.events.on(
      'addScore',
      function () {
        score++;
      },
      this
    );

    this.events.on(
      'gameOver',
      function () {
        console.log("GameOver");
        this.scene.start("GameOver", { score: score });
        this.events.off("gameOver")
        this.events.off("collectedCoin");
        this.events.off("createNewCoin");
      }.bind(this)
    );
  }

  collectCoin(player, coin) {
    coin.destroy();
    this.events.emit('createNewCoin');
    this.events.emit('addScore');
    console.log(score);
  }
  gameOver() {
    this.events.emit('gameOver')
  }
}

export default JellyGame;