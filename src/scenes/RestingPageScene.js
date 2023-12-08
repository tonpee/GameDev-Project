import Phaser from "phaser";

class RestingPageScene extends Phaser.Scene {
  constructor() {
    super({ key: "RestingPageScene" });
  }

  preload() {
    // Preload any assets needed for the resting page (if any)
  }

  create() {
    // Create the resting page UI elements

    // Add a background
    this.add.rectangle(400, 300, 800, 600, 0x000000);

    // Add text
    this.add
      .text(400, 200, "Welcome to Your Arcade Game", {
        fontSize: "32px",
        fill: "#fff",
      })
      .setOrigin(0.5, 0.5);

    // Add the Start button
    var startButton = this.add
      .text(400, 300, "Start", {
        fontSize: "24px",
        fill: "#fff",
        backgroundColor: "#00f",
        padding: 10,
      })
      .setOrigin(0.5, 0.5)
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
