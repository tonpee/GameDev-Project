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

export function create() {
  const distance = 80;
  let randomXForEll = Phaser.Math.Between(0 + distance, 1280 - distance);
  this.ell = this.physics.add
    .sprite(randomXForEll, 1280, "ell")
    .setScale(2)
    .setSize(18, 35)
    .setOffset(16, 10);
  this.ell.rotation = Phaser.Math.DegToRad(270);
  this.ell.anims.create({
    key: "ell-attack",
    frames: this.anims.generateFrameNumbers("ell", {
      start: 0,
      end: 5,
    }),
    frameRate: 6,
    repeat: -1,
  });
  this.ell.setVelocityY(-300);

  let randomYForSail = Phaser.Math.Between(720 - distance, 0 + distance);
  this.sail = this.physics.add // นำ `sail.physics.add` ออก
    .sprite(100, randomYForSail, "sail")
    .setScale(2)
    .setSize(40, 15)
    .setOffset(2, 18);
  this.sail.anims.create({
    key: "sail-attack",
    frames: this.anims.generateFrameNumbers("sail", {
      start: 0,
      end: 5,
    }),
    frameRate: 6,
    repeat: -1,
  });
  this.sail.setVelocityX(300);
}

export function update() {
  this.ell.anims.play("ell-attack", true);
  this.sail.anims.play("sail-attack", true);
}
