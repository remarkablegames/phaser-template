import {
  SCENE_BOOT,
  SCENE_MAIN,
  TEXTURE_DUDE,
  TEXTURE_GROUND,
  TEXTURE_SKY,
  TEXTURE_STAR,
} from '../constants';
import { dude, platform, sky, star } from '../assets';

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: SCENE_BOOT });
  }

  preload() {
    this.load.spritesheet(TEXTURE_DUDE, dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(TEXTURE_GROUND, platform);
    this.load.image(TEXTURE_SKY, sky);
    this.load.image(TEXTURE_STAR, star);
  }

  create() {
    this.scene.start(SCENE_MAIN);
  }
}

export default Boot;
