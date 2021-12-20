import Phaser from 'phaser';
import {
  ANIMATION_LEFT,
  ANIMATION_RIGHT,
  ANIMATION_TURN,
  TEXTURE_DUDE,
} from '../constants';

const SPEED_HORIZONTAL = 160;
const SPEED_VERTICAL = 330;

let cursors: Phaser.Types.Input.Keyboard.CursorKeys;

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture?: string,
    frame?: string | number
  ) {
    super(scene, x, y, TEXTURE_DUDE);

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Enable physics for the sprite.
    scene.physics.world.enable(this);

    // Add cursor keys.
    cursors = scene.input.keyboard.createCursorKeys();

    if (this.body instanceof Phaser.Physics.Arcade.Body) {
      // Player physics properties. Give the little guy some bounce.
      this.body.setBounceY(0.2).setCollideWorldBounds(true);
    }
  }

  init() {
    // Create left animation.
    this.anims.create({
      key: ANIMATION_LEFT,
      frames: this.anims.generateFrameNumbers(TEXTURE_DUDE, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Create turn animation.
    this.anims.create({
      key: ANIMATION_TURN,
      frames: [{ key: TEXTURE_DUDE, frame: 4 }],
      frameRate: 20,
    });

    // Create right animation.
    this.anims.create({
      key: ANIMATION_RIGHT,
      frames: this.anims.generateFrameNumbers(TEXTURE_DUDE, {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });

    return this;
  }

  update() {
    if (!(this.body instanceof Phaser.Physics.Arcade.Body)) {
      return;
    }

    switch (true) {
      // Move to the left.
      case cursors.left.isDown:
        this.body.setVelocityX(-SPEED_HORIZONTAL);
        this.anims.play(ANIMATION_LEFT, true);
        break;
      // Move to the right.
      case cursors.right.isDown:
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
    if (cursors.up.isDown && this.body.touching.down) {
      this.body.setVelocityY(-SPEED_VERTICAL);
    }
  }
}
