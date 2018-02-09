import { Sprite } from 'phaser';

export default class Sky extends Sprite {
  /** @const {String} */
  static key = 'sky';

  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   */
  constructor(game, x, y) {
    super(game, x, y, Sky.key);

    // Add sprite to the game.
    game.add.existing(this);
  }
}
