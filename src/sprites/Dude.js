import { Sprite } from 'phaser';

const spriteKey = 'dude';
const leftAnimationKey = 'left';
const rightAnimationKey = 'right';

export default class Dude extends Sprite {
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

    // We need to enables physics on the player.
    game.physics.arcade.enable(this);

    // Player physics properties. Give the little guy a slight bounce.
    this.body.bounce.y = 0.2;
    this.body.gravity.y = 300;
    this.body.collideWorldBounds = true;

    // Our two animations, walking left and right.
    this.animations.add(leftAnimationKey, [0, 1, 2, 3], 10, true);
    this.animations.add(rightAnimationKey, [5, 6, 7, 8], 10, true);
  }
}
