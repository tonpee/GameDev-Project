import Phaser from 'phaser';

class SecondScene extends Phaser.Scene {
    constructor() {
      super({ key: 'SecondScene' });
    }
  
    preload() {
      // Preload assets for the second scene
      
    }
  
    create() {
      // Create objects and set up initial state for the second scene
      this.add.text(400, 300, 'This is the Second Scene', {
        fontSize: '32px',
        fill: '#fff'
      }).setOrigin(0.5, 0.5);
    }
  
    update() {
      // Implement logic for the second scene
    }
  }
  
  export default Game-scene1;