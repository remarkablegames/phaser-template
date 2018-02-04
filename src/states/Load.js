import { State } from 'phaser';
import { Dude, Ground, Sky, Star } from '../sprites';
import Main from './Main';

export default class Load extends State {
  static key = 'load';

  preload() {
    const { load } = this;
    load.image(Ground.key, require('../assets/platform.png'));
    load.image(Sky.key, require('../assets/sky.png'));
    load.image(Star.key, require('../assets/star.png'));
    load.atlas(
      Dude.key,
      require('../assets/dude.png'),
      null,
      require('../assets/dude.json')
    );
  }

  create() {
    this.state.start(Main.key);
  }
}
