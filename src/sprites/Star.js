import { Sprite } from 'phaser';
import { data, groups, sprites, texts } from '../shared';
import { TEXTURES } from '../constants';

export default class Star extends Sprite {
  /**
   * @param {Phaser.Game} game
   * @param {Number}      x
   * @param {Number}      y
   */
  constructor(game, x, y) {
    super(game, x, y, TEXTURES.STAR);

    // Add sprite to the game.
    game.add.existing(this);

    // Then add sprite to the group.
    groups.stars.add(this);

    // Enable physics for sprite.
    game.physics.arcade.enable(this);

    // Let gravity do its thing.
    this.body.gravity.y = 100;

    // This just gives each star a slightly random bounce value.
    this.body.bounce.y = game.rnd.realInRange(0.4, 0.6);
  }

  collectStar(star, player) {
    // Removes the star from the screen.
    star.kill();

    // Add to score and update text.
    data.score += 10;
    texts.score.setScore(data.score);
  }

  update() {
    const { game } = this;

    // Check for collision against the platforms so the stars won't fall
    // through to the bottom of the game.
    game.physics.arcade.collide(this, groups.platforms);

    // Check for an overlap between the player and star.
    game.physics.arcade.overlap(
      this,
      sprites.player,
      this.collectStar,
      null,
      this
    );
  }
}
