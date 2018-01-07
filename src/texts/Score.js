import { Text } from 'phaser';

/**
 * String template for displaying score.
 *
 * @param  {Number} score
 * @return {String}
 */
const scoreTemplate = score => `Score: ${score}`;

export default class Score extends Text {
  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   * @param {String}      text
   * @param {Object}      [style]
   */
  constructor(game, x, y, text, style) {
    super(game, x, y, scoreTemplate(text), style);
    // Add text to the game.
    game.add.existing(this);
  }

  /**
   * Updates score text.
   *
   * @param {Number} score
   */
  setScore = score => {
    this.text = scoreTemplate(score);
  };
}
