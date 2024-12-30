import Phaser from 'phaser';

import { dude, platform, sky, star } from '../assets';
import { Image, Scene } from '../constants';

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: Scene.Boot });
  }

  preload() {
    this.load.spritesheet(Image.Dude, dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(Image.Ground, platform);
    this.load.image(Image.Sky, sky);
    this.load.image(Image.Star, star);
  }

  create() {
    this.scene.start(Scene.Main);
  }
}
