import Phaser from 'phaser';

import { TEXTURE } from '../constants';

const ANIMATION = {
  LEFT: 'PlayerLeft',
  RIGHT: 'PlayerRight',
  TURN: 'PlayerTurn',
} as const;

const SPEED = {
  HORIZONTAL: 160,
  VERTICAL: 330,
} as const;

export class Player extends Phaser.Physics.Arcade.Sprite {
  declare body: Phaser.Physics.Arcade.Body;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture = TEXTURE.DUDE,
    frame = 0,
  ) {
    super(scene, x, y, texture, frame);

    // Add the sprite to the scene
    scene.add.existing(this);

    // Enable physics for the sprite
    scene.physics.world.enable(this);

    // Add cursor keys
    if (!scene.input.keyboard) {
      throw new Error('Keyboard input not available');
    }
    this.cursors = scene.input.keyboard.createCursorKeys();

    // Create sprite animations
    this.createAnimations();

    // Player physics properties
    // Give the little guy some bounce
    this.body.setBounceY(0.2).setCollideWorldBounds(true);
  }

  private createAnimations() {
    const anims = this.scene.anims;

    // Create left animation
    if (!anims.exists(ANIMATION.LEFT)) {
      anims.create({
        key: ANIMATION.LEFT,
        frames: anims.generateFrameNumbers(TEXTURE.DUDE, {
          start: 0,
          end: 3,
        }),
        frameRate: 10,
        repeat: -1,
      });
    }

    // Create turn animation
    if (!anims.exists(ANIMATION.TURN)) {
      anims.create({
        key: ANIMATION.TURN,
        frames: [{ key: TEXTURE.DUDE, frame: 4 }],
        frameRate: 20,
      });
    }

    // Create right animation
    if (!anims.exists(ANIMATION.RIGHT)) {
      anims.create({
        key: ANIMATION.RIGHT,
        frames: anims.generateFrameNumbers(TEXTURE.DUDE, {
          start: 5,
          end: 8,
        }),
        frameRate: 10,
        repeat: -1,
      });
    }
  }

  update() {
    switch (true) {
      // Move to the left
      case this.cursors.left.isDown:
        this.body.setVelocityX(-SPEED.HORIZONTAL);
        this.anims.play(ANIMATION.LEFT, true);
        break;

      // Move to the right
      case this.cursors.right.isDown:
        this.body.setVelocityX(SPEED.HORIZONTAL);
        this.anims.play(ANIMATION.RIGHT, true);
        break;

      // Stand still
      default:
        this.body.setVelocityX(0);
        this.anims.play(ANIMATION.TURN);
        break;
    }

    // Allow player to jump if sprite is touching the ground
    if (this.cursors.up.isDown && this.body.touching.down) {
      this.body.setVelocityY(-SPEED.VERTICAL);
    }
  }
}
