/**
 * Template for displaying the score.
 *
 * @param  {Number} score
 * @return {String}
 */
const scoreTemplate = score => `Score: ${score}`;

class Score extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text, style) {
    super(scene, x, y, scoreTemplate(text), style);

    // Add text to the scene.
    scene.add.existing(this);
  }

  /**
   * Updates the score text.
   *
   * @param {Number} score
   */
  setScore = score => {
    this.text = scoreTemplate(score);
  };
}

export default Score;
