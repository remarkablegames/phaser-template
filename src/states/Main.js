import { Physics, State } from 'phaser';
import { Dude, Ground, Sky, Star } from '../sprites';
import { groups, sprites } from '../shared';

export default class Main extends State {
  static key = 'main';

  create() {
    const { game } = this;

    // We're going to be using physics, so enable the Arcade Physics system.
    this.physics.startSystem(Physics.ARCADE);

    // A simple background for our game.
    new Sky(game, 0, 0);

    // The platforms group contains the ground and the 2 ledges we can jump on.
    // It's created after the background so the order of layers (z-depth) is
    // maintained (otherwise, the platforms will be hidden by the background).
    groups.platforms = this.add.group();

    // Here we create the ground.
    const ground = new Ground(this.game, 0, this.world.height - 64);

    // Scale it to fit the width of the game.
    // (The original sprite is 400x32 in size.)
    ground.scale.setTo(2, 2);

    // Now let's create two ledges.
    [[400, 400], [-150, 250]].forEach(coordinates => {
      new Ground(game, ...coordinates);
    });

    // The player and its settings.
    sprites.player = new Dude(game, 32, this.world.height - 150);

    // Create stars group.
    groups.stars = this.add.group();

    // Here we'll create 12 of them evenly spaced apart.
    for (let i = 0; i < 12; i++) {
      new Star(game, i * 70, 0);
    }
  }
}
