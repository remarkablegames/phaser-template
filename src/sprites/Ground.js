import { Sprite } from 'phaser';
import { groups } from '../shared';

export default class Ground extends Sprite {
  /** @const {String} */
  static key = 'ground';

  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   */
  constructor(game, x, y) {
    super(game, x, y, Ground.key);

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
