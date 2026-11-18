import Phaser from 'phaser';

import { KEY } from '../constants';

export class Boot extends Phaser.Scene {
  constructor() {
    super(KEY.SCENE.BOOT);
  }

  preload() {
    this.load.spritesheet(KEY.TEXTURE.DUDE, 'sprites/dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(KEY.TEXTURE.GROUND, 'images/platform.png');
    this.load.image(KEY.TEXTURE.SKY, 'backgrounds/sky.png');
    this.load.image(KEY.TEXTURE.STAR, 'images/star.png');
  }

  create() {
    this.scene.start(KEY.SCENE.GAME);
  }
}
