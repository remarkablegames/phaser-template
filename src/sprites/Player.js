import { ANIMATIONS, TEXTURES } from '../constants';

const HORIZONTAL_SPEED = 160;
const VERTICAL_SPEED = 330;

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
    const { anims } = this.scene;

    // Create left animation.
    anims.create({
      key: ANIMATIONS.LEFT,
      frames: anims.generateFrameNumbers(TEXTURES.DUDE, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Create turn animation.
    anims.create({
      key: ANIMATIONS.TURN,
      frames: [{ key: TEXTURES.DUDE, frame: 4 }],
      frameRate: 20,
    });

    // Create right animation.
    anims.create({
      key: ANIMATIONS.RIGHT,
      frames: anims.generateFrameNumbers(TEXTURES.DUDE, {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });

    return this;
  }

  update() {
    const { anims, body, cursors } = this;

    switch (true) {
      // Move to the left.
      case cursors.left.isDown:
        body.setVelocityX(-HORIZONTAL_SPEED);
        anims.play(ANIMATIONS.LEFT, true);
        break;
      // Move to the right.
      case cursors.right.isDown:
        body.setVelocityX(HORIZONTAL_SPEED);
        anims.play(ANIMATIONS.RIGHT, true);
        break;
      // Stand still.
      default:
        body.setVelocityX(0);
        anims.play(ANIMATIONS.TURN);
        break;
    }

    // Allow player to jump if sprite is touching the ground.
    if (cursors.up.isDown && body.touching.down) {
      body.setVelocityY(-VERTICAL_SPEED);
    }
  }
}

export default Player;
