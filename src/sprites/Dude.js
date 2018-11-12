import { Sprite } from 'phaser';
import { groups } from '../shared';

const animationKey = {
  left: 'left',
  right: 'right',
};
import { TEXTURES } from '../constants';

export default class Dude extends Sprite {
  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   */
  constructor(game, x, y) {
    super(game, x, y, TEXTURES.DUDE);

    // Add sprite to the game.
    game.add.existing(this);

    // We need to enables physics on the player.
    game.physics.arcade.enable(this);

    // Player physics properties. Give the little guy a slight bounce.
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;

    // Our two animations, walking left and right.
    this.animations.add(animationKey.left, [0, 1, 0, 2], 10, true);
    this.animations.add(animationKey.right, [4, 5, 4, 6], 10, true);

    // Create cursor keys for movement.
    this.cursors = game.input.keyboard.createCursorKeys();
  }

  update() {
    const { animations, body, cursors } = this;

    // Collide the player with the platform or else the player will fall through.
    const hitPlatform = this.game.physics.arcade.collide(
      this,
      groups.platforms
    );

    // Reset the player velocity (movement).
    body.velocity.x = 0;

    if (cursors.left.isDown) {
      // Move to the left.
      body.velocity.x = -150;
      animations.play(animationKey.left);
    } else if (cursors.right.isDown) {
      // Move to the right.
      body.velocity.x = 150;
      animations.play(animationKey.right);
    } else {
      // Stand still.
      animations.stop();
      this.frame = 3;
    }

    // Allow player to jump if sprite is touching the ground.
    if (cursors.up.isDown && body.touching.down && hitPlatform) {
      body.velocity.y = -350;
    }
  }
}
