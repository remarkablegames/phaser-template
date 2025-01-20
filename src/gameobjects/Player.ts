import Phaser from 'phaser';

import { Texture } from '../constants';

enum Animation {
  Left = 'PlayerLeft',
  Right = 'PlayerRight',
  Turn = 'PlayerTurn',
}

enum Speed {
  Horizontal = 160,
  Vertical = 330,
}

export class Player extends Phaser.Physics.Arcade.Sprite {
  body!: Phaser.Physics.Arcade.Body;
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture = Texture.Dude,
    frame = 0,
  ) {
    super(scene, x, y, texture, frame);

    // Add the sprite to the scene
    scene.add.existing(this);

    // Enable physics for the sprite
    scene.physics.world.enable(this);

    // Add cursor keys
    this.cursors = scene.input.keyboard!.createCursorKeys();

    // Create sprite animations
    this.createAnimations();

    // Player physics properties
    // Give the little guy some bounce
    this.body.setBounceY(0.2).setCollideWorldBounds(true);
  }

  private createAnimations() {
    const anims = this.scene.anims;

    // Create left animation
    if (!anims.exists(Animation.Left)) {
      anims.create({
        key: Animation.Left,
        frames: anims.generateFrameNumbers(Texture.Dude, {
          start: 0,
          end: 3,
        }),
        frameRate: 10,
        repeat: -1,
      });
    }

    // Create turn animation
    if (!anims.exists(Animation.Turn)) {
      anims.create({
        key: Animation.Turn,
        frames: [{ key: Texture.Dude, frame: 4 }],
        frameRate: 20,
      });
    }

    // Create right animation
    if (!anims.exists(Animation.Right)) {
      anims.create({
        key: Animation.Right,
        frames: anims.generateFrameNumbers(Texture.Dude, {
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
        this.body.setVelocityX(-Speed.Horizontal);
        this.anims.play(Animation.Left, true);
        break;

      // Move to the right
      case this.cursors.right.isDown:
        this.body.setVelocityX(Speed.Horizontal);
        this.anims.play(Animation.Right, true);
        break;

      // Stand still
      default:
        this.body.setVelocityX(0);
        this.anims.play(Animation.Turn);
        break;
    }

    // Allow player to jump if sprite is touching the ground
    if (this.cursors.up.isDown && this.body.touching.down) {
      this.body.setVelocityY(-Speed.Vertical);
    }
  }
}
