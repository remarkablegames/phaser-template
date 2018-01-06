import { State } from 'phaser';
import { Dude, Ground, Sky, Star } from '../sprites';

export default class Load extends State {
  static key = 'load';

  preload() {
    const { load } = this;
    load.image(Ground.key, require('../assets/platform.png'));
    load.image(Sky.key, require('../assets/sky.png'));
    load.image(Star.key, require('../assets/star.png'));
    load.spritesheet(Dude.key, require('../assets/dude.png'), 32, 48);
  }
}
