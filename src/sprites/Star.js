import { Sprite } from 'phaser';

const spriteKey = 'star';

export default class Star extends Sprite {
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
  }
}
