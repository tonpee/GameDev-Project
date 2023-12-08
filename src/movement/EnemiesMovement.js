export function preload() {
  this.load.spritesheet("ell", "./../../assets/anim/enemy/ell.png", {
    frameWidth: 48,
    frameHeight: 48,
  });

  this.load.spritesheet("sail", "./../../assets/anim/enemy/sail.png", {
    frameWidth: 48,
    frameHeight: 48,
  });
}

export function createEnemies() {
    for (let i = 0; i <= 5; i++) {
        create(this);
    }
}

let ell;
let sail;

export function create(obj) {
    const distance = 80;
    console.log(obj);
    let randomXForEll = Phaser.Math.Between(0 + distance, 1280 - distance);
    ell = obj.physics.add
      .sprite(randomXForEll, 1280, "ell")
      .setScale(2)
      .setSize(18, 35)
      .setOffset(16, 10);
    ell.rotation = Phaser.Math.DegToRad(270);
    obj.anims.create({
      key: "ell-attack",
      frames: obj.anims.generateFrameNumbers("ell", {
        start: 0,
        end: 5,
      }),
      frameRate: 6,
      repeat: -1,
    });
    ell.setVelocityY(-300);
    
    let randomYForSail = Phaser.Math.Between(720 - distance, 0 + distance);
    sail = obj.physics.add
      .sprite(100, randomYForSail, "sail")
      .setScale(2) // Fixed this line
      .setSize(40, 15)
      .setOffset(2, 18);
    obj.anims.create({
      key: "sail-attack",
      frames: obj.anims.generateFrameNumbers("sail", {
        start: 0,
        end: 5,
      }),
      frameRate: 6,
      repeat: -1,
    });
    sail.setVelocityX(300);
  }
  

export function update() {
  ell.anims.play("ell-attack", true);

  sail.anims.play("sail-attack", true);
}
