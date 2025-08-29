import Phaser from 'phaser';

import sky from '/backgrounds/sky.png';
import ground from '/images/platform.png';
import star from '/images/star.png';
import dude from '/sprites/dude.png';

import { Scene, Texture } from '../constants';

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: Scene.Boot });
  }

  preload() {
    this.load.spritesheet(Texture.Dude, dude, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(Texture.Ground, ground);
    this.load.image(Texture.Sky, sky);
    this.load.image(Texture.Star, star);
  }

  create() {
    this.scene.start(Scene.Main);
  }
}
