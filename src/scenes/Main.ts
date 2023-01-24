import Phaser from 'phaser';

import { key } from '../data';
import { Player, Star } from '../sprites';
import { state } from '../store';
import { Score } from '../texts';

export default class Main extends Phaser.Scene {
  private player!: Player;
  private score!: Score;

  constructor() {
    super(key.scene.main);
  }

  create() {
    // A simple background for our game.
    this.add.image(0, 0, key.image.sky).setOrigin(0);

    // The platforms group contains the ground and the 2 ledges we can jump on.
    // It's created after the background so the order of layers (z-depth) is
    // maintained (otherwise, the platforms will be hidden by the background).
    const platforms = this.physics.add.staticGroup({
      defaultKey: key.image.ground,
    });

    // Create the ground (scale it to fit the width of the game).
    // The original sprite is 400x32 in size.
    platforms
      .get(0, Number(this.game.config.height) - 64)
      .setOrigin(0)
      .setScale(2)
      .refreshBody();

    // Now let's create three ledges.
    [
      [600, 400],
      [50, 250],
      [750, 220],
    ].forEach((coordinates) => {
      platforms.get(...coordinates);
    });

    // Create stars group.
    const stars = this.physics.add.group({
      classType: Star,
    });

    // Here we'll create 12 of them evenly spaced apart.
    for (let i = 0; i < 12; i++) {
      const star = stars.get(i * 70, 0);

      // Give the star some bounce.
      star.body.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    }

    // Collide the star with the platform or else the star will fall through.
    this.physics.add.collider(stars, platforms);

    // Create player.
    this.player = new Player(this, 32, Number(this.game.config.height) - 150);

    // Collide the player with the platform or else the player will fall through.
    this.physics.add.collider(this.player, platforms);

    // Check for overlap between the player and the star.
    this.physics.add.overlap(
      this.player,
      stars,
      (player, star) => {
        // Make the star inactive and invisible.
        (star as Phaser.Physics.Arcade.Sprite).disableBody(true, true);

        // Add to the score and update the text.
        state.score += 10;
        this.score.setScore(state.score);
      },
      undefined,
      this
    );

    // Display score.
    this.score = new Score(this, 16, 16, state.score, {
      fontFamily: '"Lucida Grande", Helvetica, Arial, sans-serif',
      fontSize: '32px',
    });
  }

  update() {
    this.player.update();
  }
}
