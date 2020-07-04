import { SCENES, TEXTURES } from '../constants';

const { Scene } = window.Phaser;

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  preload() {
    const { load } = this;
    load.image(TEXTURES.GROUND, require('../assets/platform.png').default);
    load.image(TEXTURES.SKY, require('../assets/sky.png').default);
    load.image(TEXTURES.STAR, require('../assets/star.png').default);
    load.spritesheet(TEXTURES.DUDE, require('../assets/dude.png').default, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.scene.start(SCENES.MAIN);
  }
}
