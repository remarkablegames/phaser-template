import Phaser from 'phaser';

import { dude, platform, sky, star } from '../assets';
import { Texture } from '../types';
import { Main } from '.';

export default class Boot extends Phaser.Scene {
  static key = 'BootScene';

  constructor() {
    super({ key: Boot.key });
  }

  preload() {
    this.load.spritesheet(Texture.Dude, dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(Texture.Ground, platform);
    this.load.image(Texture.Sky, sky);
    this.load.image(Texture.Star, star);
  }

  create() {
    this.scene.start(Main.key);
  }
}
