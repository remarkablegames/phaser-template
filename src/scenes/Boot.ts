import Phaser from 'phaser';

import { dude, platform, sky, star } from '../assets';
import { key } from '../constants';

export class Boot extends Phaser.Scene {
  constructor() {
    super(key.scene.boot);
  }

  preload() {
    this.load.spritesheet(key.image.dude, dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(key.image.ground, platform);
    this.load.image(key.image.sky, sky);
    this.load.image(key.image.star, star);
  }

  create() {
    this.scene.start(key.scene.main);
  }
}
