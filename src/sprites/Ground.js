import { Sprite } from 'phaser';
import { groups } from '../shared';

const spriteKey = 'ground';

export default class Ground extends Sprite {
  static key = spriteKey;

  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   */
  constructor(game, x, y) {
    super(game, x, y, spriteKey);

    // Add sprite to the game.
    game.add.existing(this);

    // Then add sprite to the group.
    groups.platforms.add(this);

    // Enable physics for sprite.
    game.physics.arcade.enable(this);

    // This stops the sprite from falling away when you jump on it.
    this.body.immovable = true;
  }
}
