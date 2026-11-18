import Phaser from 'phaser';

import { KEY } from '../constants';

export class Star extends Phaser.Physics.Arcade.Sprite {
  declare body: Phaser.Physics.Arcade.Body;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, KEY.TEXTURE.STAR);

    // Reset drawing position of image to the top-left
    this.setOrigin(0);
  }
}
