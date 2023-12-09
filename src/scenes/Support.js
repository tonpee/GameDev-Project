// import Phaser from "phaser";

// class Support extends Phaser.Scene {
//   constructor() {
//     super({ key: "Support" });
//   }

//   preload() {
//     // Preload any assets needed for the resting page (if any)
//     this.load.image("gameStartBackground", "./../../assets/background/GameStart.png");
//     this.load.image("startIcon", "./../../assets/icon/startIcon.png");
//     this.load.audio("bubbleSoundButton", "./../../assets/music/bubbleSoundButton.wav")
//   }

//   create() {
//     // Create the resting page UI elements

//     // Add a background
//     this.add.image(0, 0, "gameStartBackground").setOrigin(0, 0);

//     // Add the Start button
//     var startButton = this.add
//       .image(650, 500, "startIcon")
//       .setOrigin(0.5, 0.5)
//       .setScale(0.29)
//       .setInteractive();

//     // Set up the button click event
//     startButton.on(
//       "pointerdown",
//       function () {
//         this.scene.start("./RestingPageScene.js");
//         this.bubbleSoundButton = this.sound.add("bubbleSoundButton", {
//           loop: false,
//           volume: 1,
//         });
//         this.bubbleSoundButton.play();
//       },
//       this
//     );
//   }
// }

// export default RestingPageScene;