import {
  ANIMATION_LEFT,
  ANIMATION_RIGHT,
  ANIMATION_TURN,
  TEXTURES,
} from '../constants';

const SPEED_HORIZONTAL = 160;
const SPEED_VERTICAL = 330;

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.DUDE);

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Enable physics for the sprite.
    scene.physics.world.enable(this);

    // Player physics properties. Give the little guy some bounce.
    this.body.setBounceY(0.2).setCollideWorldBounds(true);

    // Add cursor keys.
    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  init() {
    // Create left animation.
    this.anims.create({
      key: ANIMATION_LEFT,
      frames: this.anims.generateFrameNumbers(TEXTURES.DUDE, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Create turn animation.
    this.anims.create({
      key: ANIMATION_TURN,
      frames: [{ key: TEXTURES.DUDE, frame: 4 }],
      frameRate: 20,
    });

    // Create right animation.
    this.anims.create({
      key: ANIMATION_RIGHT,
      frames: this.anims.generateFrameNumbers(TEXTURES.DUDE, {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });

    return this;
  }

  update() {
    switch (true) {
      // Move to the left.
      case this.cursors.left.isDown:
        this.body.setVelocityX(-SPEED_HORIZONTAL);
        this.anims.play(ANIMATION_LEFT, true);
        break;
      // Move to the right.
      case this.cursors.right.isDown:
        this.body.setVelocityX(SPEED_HORIZONTAL);
        this.anims.play(ANIMATION_RIGHT, true);
        break;
      // Stand still.
      default:
        this.body.setVelocityX(0);
        this.anims.play(ANIMATION_TURN);
        break;
    }

    // Allow player to jump if sprite is touching the ground.
    if (this.cursors.up.isDown && this.body.touching.down) {
      this.body.setVelocityY(-SPEED_VERTICAL);
    }
  }
}

export default Player;
