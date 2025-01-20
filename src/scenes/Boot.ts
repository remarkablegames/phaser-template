import Phaser from 'phaser';

import { Scene, Texture } from '../constants';

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: Scene.Boot });
  }

  preload() {
    this.load.spritesheet(Texture.Dude, '/sprites/dude.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.image(Texture.Ground, '/images/platform.png');
    this.load.image(Texture.Sky, '/backgrounds/sky.png');
    this.load.image(Texture.Star, '/images/star.png');
  }

  create() {
    this.scene.start(Scene.Main);
  }
}
