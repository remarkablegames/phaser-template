import Phaser from 'phaser';

import sky from '/backgrounds/sky.png';
import ground from '/images/platform.png';
import star from '/images/star.png';
import dude from '/sprites/dude.png';

import { SCENE, TEXTURE } from '../constants';

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: SCENE.BOOT });
  }

  preload() {
    this.load.spritesheet(TEXTURE.DUDE, dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(TEXTURE.GROUND, ground);
    this.load.image(TEXTURE.SKY, sky);
    this.load.image(TEXTURE.STAR, star);
  }

  create() {
    this.scene.start(SCENE.MAIN);
  }
}
