import Phaser from "phaser";

class GameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  preload() {
    // background
    this.load.image(
      "GameOverBackground",
      "./../../assets/background/GameOverBackground.png"
    );
    this.load.image("GameOverText", "./../../assets/icon/GameOverText.png");
    this.load.image("homeButton", "./../../assets/icon/home.png");
    this.load.image("restartGameButton", "./../../assets/icon/restart.png");
  }

  init(data) {
    this.currentScore = data.score;
    const highScore = sessionStorage.getItem("highScore");
    if (highScore) {
      if (this.currentScore > highScore) {
        sessionStorage.setItem("highScore", this.currentScore);
      }
    } else {
      sessionStorage.setItem("highScore", this.currentScore);
    }
  }

  create() {
    // Display the background image
    const background = this.add
      .image(0, 0, "GameOverBackground")
      .setOrigin(0, 0);

    // You can set the display size if needed
    background.setDisplaySize(
      this.sys.game.config.width,
      this.sys.game.config.height
    );

    // const bg1 = this.add.image(0, 0, "bg1").setOrigin(0, 0);
    // background.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
    console.log(this);
    // แสดงคะแนน
    const scoreText = this.add.text(
      640,
      400,
      `Score: ${this.currentScore}
      High Score: ${sessionStorage.getItem("highScore")}`,
      {
        fontFamily: "Arial",
        fontSize: 24,
        color: "#ffffff",
      }
    );
    scoreText.setOrigin(0.5);

    const gameOverText = this.add.image(640, 300, "GameOverText");
    gameOverText.setDisplaySize(800, 400); // ตั้งค่าขนาดของรูปภาพ
    gameOverText.setOrigin(0.5); // ตั้งค่าจุดกำเนิดตรงกลาง

    var homeButton = this.add
      .image(427, 500, "homeButton")
      .setOrigin(0.5, 0.5)
      .setInteractive();
    // Set up the button click event
    homeButton.on(
      "pointerdown",
      function () {
        this.scene.start("RestingPageScene");
      },
      this
    );

    var restartGameButton = this.add
      .image(853, 500, "restartGameButton")
      .setOrigin(0.5, 0.5)
      .setInteractive();
    // Set up the button click event
    restartGameButton.on(
      "pointerdown",
      function () {
        this.scene.start("JellyGame");
      },
      this
    );
  }

  update() {}
}

export default GameOver;
