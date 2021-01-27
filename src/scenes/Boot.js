import { SCENE_BOOT, SCENE_MAIN, TEXTURES } from '../constants';
import { dude, platform, sky, star } from '../assets';

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_BOOT });
  }

  preload() {
    this.load.spritesheet(TEXTURES.DUDE, dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(TEXTURES.GROUND, platform);
    this.load.image(TEXTURES.SKY, sky);
    this.load.image(TEXTURES.STAR, star);
  }

  create() {
    this.scene.start(SCENE_MAIN);
  }
}

export default Boot;
