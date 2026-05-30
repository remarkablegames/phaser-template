import Phaser from 'phaser';

import { Texture } from '../constants';

export class Star extends Phaser.Physics.Arcade.Sprite {
  declare body: Phaser.Physics.Arcade.Body;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, Texture.Star);

    // Reset drawing position of image to the top-left
    this.setOrigin(0);
  }
}
