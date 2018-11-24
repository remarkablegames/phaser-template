import { Scene } from 'phaser';
import { SCENES, TEXTURES } from '../constants';

export default class Load extends Scene {
  constructor() {
    super({ key: SCENES.LOAD });
  }

  preload() {
    const { load } = this;
    load.image(TEXTURES.GROUND, require('../assets/platform.png'));
    load.image(TEXTURES.SKY, require('../assets/sky.png'));
    load.image(TEXTURES.STAR, require('../assets/star.png'));
    load.spritesheet(TEXTURES.DUDE, require('../assets/dude.png'), {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.scene.start(SCENES.MAIN);
  }
}
