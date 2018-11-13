import { State } from 'phaser';
import { STATES, TEXTURES } from '../constants';

export default class Load extends State {
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
    this.state.start(STATES.MAIN);
  }
}
