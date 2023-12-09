export function preload() {
  this.load.spritesheet(
    "jelly-stay",
    "./../../assets/anim/player/jellyfish-stay.PNG",
    {
      frameWidth: 32,
      frameHeight: 74,
    }
  );
  this.load.spritesheet(
    "jelly-swim",
    "./../../assets/anim/player/jellyfish-swim.PNG",
    {
      frameWidth: 32,
      frameHeight: 74,
    }
  );
}

export function create() {
  this.player = this.physics.add
    .sprite(640, 360, "jelly-stay")
    .setScale(4.5)
    .setSize(9, 13)
    .setOffset(12, 28);
  this.player.setCollideWorldBounds(true);
  this.anims.create({
    key: "player-stay",
    frames: this.anims.generateFrameNumbers("jelly-stay", {
      start: 0,
      end: 4,
    }),
    frameRate: 6,
    repeat: -1,
  });
  this.anims.create({
    key: "player-swim",
    frames: this.anims.generateFrameNumbers("jelly-swim", {
      start: 0,
      end: 4,
    }),
    frameRate: 10,
    repeat: -1,
  });

  this.W = this.input.keyboard.addKey("W");
  this.A = this.input.keyboard.addKey("A");
  this.S = this.input.keyboard.addKey("S");
  this.D = this.input.keyboard.addKey("D");
}
export function update() {
  if (this.W.isDown && this.A.isDown) {
    this.player.setVelocityX(-400 / Math.sqrt(2));
    this.player.setVelocityY(-400 / Math.sqrt(2));
    this.player.anims.play("player-swim", true);
  } else if (this.W.isDown && this.D.isDown) {
    this.player.setVelocityX(400 / Math.sqrt(2));
    this.player.setVelocityY(-400 / Math.sqrt(2));
    this.player.anims.play("player-swim", true);
  } else if (this.S.isDown && this.A.isDown) {
    this.player.setVelocityY(400 / Math.sqrt(2));
    this.player.setVelocityX(-400 / Math.sqrt(2));
    this.player.anims.play("player-swim", true);
  } else if (this.S.isDown && this.D.isDown) {
    this.player.setVelocityY(400 / Math.sqrt(2));
    this.player.setVelocityX(400 / Math.sqrt(2));
    this.player.anims.play("player-swim", true);
  } else if (this.W.isDown) {
    this.player.setVelocityY(-400);
    this.player.anims.play("player-stay", true);
  } else if (this.A.isDown) {
    this.player.setVelocityX(-400);
    this.player.anims.play("player-swim", true);
  } else if (this.S.isDown) {
    this.player.setVelocityY(400);
    this.player.anims.play("player-stay", true);
  } else if (this.D.isDown) {
    this.player.setVelocityX(400);
    this.player.anims.play("player-swim", true);
  } else {
    this.player.setVelocityX(0);
    this.player.setVelocityY(5);
    this.player.anims.play("player-stay", true);
  }
}
