import { Sprite } from 'phaser';
import { TEXTURES } from '../constants';

export default class Sky extends Sprite {
  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   */
  constructor(game, x, y) {
    super(game, x, y, TEXTURES.SKY);

    // Add sprite to the game.
    game.add.existing(this);
  }
}
