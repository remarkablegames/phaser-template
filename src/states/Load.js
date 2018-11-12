import { State } from 'phaser';
import Main from './Main';
import { TEXTURES } from '../constants';

export default class Load extends State {
  static key = 'load';

  preload() {
    const { load } = this;
    load.image(TEXTURES.GROUND, require('../assets/platform.png'));
    load.image(TEXTURES.SKY, require('../assets/sky.png'));
    load.image(TEXTURES.STAR, require('../assets/star.png'));
    load.atlas(
      TEXTURES.DUDE,
      require('../assets/dude.png'),
      null,
      require('../assets/dude.json')
    );
  }

  create() {
    this.state.start(Main.key);
  }
}
