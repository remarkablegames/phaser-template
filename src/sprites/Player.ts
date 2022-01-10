import Phaser from 'phaser';

import { Image } from '../types';

enum Animation {
  Left = 'Left',
  Right = 'Right',
  Turn = 'Turn',
}

enum Speed {
  Horizontal = 160,
  Vertical = 330,
}

let cursors: Phaser.Types.Input.Keyboard.CursorKeys;

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture = Image.Dude,
    frame = 0
  ) {
    super(scene, x, y, texture, frame);

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

    // Create left animation.
    this.anims.create({
      key: Animation.Left,
      frames: this.anims.generateFrameNumbers(Image.Dude, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Create turn animation.
    this.anims.create({
      key: Animation.Turn,
      frames: [{ key: Image.Dude, frame: 4 }],
      frameRate: 20,
    });

    // Create right animation.
    this.anims.create({
      key: Animation.Right,
      frames: this.anims.generateFrameNumbers(Image.Dude, {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    if (!(this.body instanceof Phaser.Physics.Arcade.Body)) {
      return;
    }

    switch (true) {
      // Move to the left.
      case cursors.left.isDown:
        this.body.setVelocityX(-Speed.Horizontal);
        this.anims.play(Animation.Left, true);
        break;
      // Move to the right.
      case cursors.right.isDown:
        this.body.setVelocityX(Speed.Horizontal);
        this.anims.play(Animation.Right, true);
        break;
      // Stand still.
      default:
        this.body.setVelocityX(0);
        this.anims.play(Animation.Turn);
        break;
    }

    // Allow player to jump if sprite is touching the ground.
    if (cursors.up.isDown && this.body.touching.down) {
      this.body.setVelocityY(-Speed.Vertical);
    }
  }
}
