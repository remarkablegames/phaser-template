import { GameObjects } from 'phaser';
import { data, groups, sprites, texts } from '../shared';
import { ANIMATION_KEYS, TEXTURES } from '../constants';

export default class Player extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.DUDE);
    sprites.player = this;

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Enable physics for the sprite.
    scene.physics.world.enable(this);

    // Player physics properties. Give the little guy some bounce.
    this.body.setBounceY(0.2).setCollideWorldBounds(true);

    // Collide the player with the platform or else the player will fall through.
    scene.physics.add.collider(this, groups.platforms);

    // Check for overlap between the player and the star.
    scene.physics.add.overlap(this, groups.stars, this.collectStar, null, this);
  }

  collectStar(player, star) {
    // Make the star inactive and invisible.
    star.disableBody(true, true);

    // Add to the score and update the text.
    data.score += 10;
    texts.score.setScore(data.score);
  }

  create() {
    const { anims } = this.scene;

    // Create left animation.
    anims.create({
      key: ANIMATION_KEYS.LEFT,
      frames: anims.generateFrameNumbers(TEXTURES.DUDE, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    // Create turn animation.
    anims.create({
      key: ANIMATION_KEYS.TURN,
      frames: [{ key: TEXTURES.DUDE, frame: 4 }],
      frameRate: 20,
    });

    // Create right animation.
    anims.create({
      key: ANIMATION_KEYS.RIGHT,
      frames: anims.generateFrameNumbers(TEXTURES.DUDE, {
        start: 5,
        end: 8,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    const {
      anims,
      body,
      scene: { cursors },
    } = this;

    switch (true) {
      // Move to the left.
      case cursors.left.isDown:
        body.setVelocityX(-160);
        anims.play(ANIMATION_KEYS.LEFT, true);
        break;
      // Move to the right.
      case cursors.right.isDown:
        body.setVelocityX(160);
        anims.play(ANIMATION_KEYS.RIGHT, true);
        break;
      // Stand still.
      default:
        body.setVelocityX(0);
        anims.play(ANIMATION_KEYS.TURN);
        break;
    }

    // Allow player to jump if sprite is touching the ground.
    if (cursors.up.isDown && body.touching.down) {
      body.setVelocityY(-330);
    }
  }
}
