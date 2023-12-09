import Phaser from "phaser";

class RestingPageScene extends Phaser.Scene {
  constructor() {
    super({ key: "RestingPageScene" });
  }

  preload() {
    // Preload any assets needed for the resting page (if any)
    this.load.image("gameStartBackground", "./../../assets/background/GameStart.png");
    this.load.image("startIcon", "./../../assets/icon/startIcon.png");
    this.load.audio("bgUnderwater", "./../../assets/music/underwater-loop-amb-6182.mp3")
  }

  create() {
    // Create the resting page UI elements

    // Add a background
    this.backgroundMusic = this.sound.add('bgUnderwater', { loop: true, volume: 0.5 });
    this.backgroundMusic.play();
    this.add.image(0, 0, "gameStartBackground").setOrigin(0, 0);

    // Add the Start button
    var startButton = this.add
      .image(650, 500, "startIcon")
      .setOrigin(0.5, 0.5)
      .setScale(0.29)
      .setInteractive();

    // Set up the button click event
    startButton.on(
      "pointerdown",
      function () {
        this.scene.start("JellyGame");
      },
      this
    );
  }
}

export default RestingPageScene;