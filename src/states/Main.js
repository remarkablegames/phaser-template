import { Physics, State } from 'phaser';
import { Ground, Player, Star } from '../sprites';
import { Score } from '../texts';
import { data, groups, sprites, texts } from '../shared';
import { TEXTURES } from '../constants';

export default class Main extends State {
  create() {
    const { add, game } = this;

    // We're going to be using physics, so enable the Arcade Physics system.
    this.physics.startSystem(Physics.ARCADE);

    // A simple background for our game.
    add.image(0, 0, TEXTURES.SKY);

    // The platforms group contains the ground and the 2 ledges we can jump on.
    // It's created after the background so the order of layers (z-depth) is
    // maintained (otherwise, the platforms will be hidden by the background).
    groups.platforms = add.group();

    // Here we create the ground.
    const ground = new Ground(game, 0, this.world.height - 64);

    // Scale it to fit the width of the game.
    // (The original sprite is 400x32 in size.)
    ground.scale.setTo(2, 2);

    // Now let's create two ledges.
    [[400, 400], [-150, 250]].forEach(coordinates => {
      new Ground(game, ...coordinates);
    });

    // The player and its settings.
    sprites.player = new Player(game, 32, this.world.height - 150);

    // Create stars group.
    groups.stars = add.group();

    // Here we'll create 12 of them evenly spaced apart.
    for (let i = 0; i < 12; i++) {
      new Star(game, i * 70, 0);
    }

    // Display score.
    data.score = 0;
    texts.score = new Score(game, 16, 16, data.score, {
      fill: 'white',
      font: '32px "Lucida Grande"',
    });
  }
}
