import Phaser from 'phaser';

import { dude, platform, sky, star } from '../assets';
import {
  TEXTURE_DUDE,
  TEXTURE_GROUND,
  TEXTURE_SKY,
  TEXTURE_STAR,
} from '../constants';
import { Main } from '.';

export default class Boot extends Phaser.Scene {
  static key = 'BootScene';

  constructor() {
    super({ key: Boot.key });
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
    this.scene.start(Main.key);
  }
}
