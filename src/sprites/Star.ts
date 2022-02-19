import Phaser from 'phaser';

import { key } from '../data';

export default class Star extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture = key.image.star,
    frame: string | number
  ) {
    super(scene, x, y, texture || key.image.star, frame);

    // Reset drawing position of image to the top-left
    this.setOrigin(0);
  }
}
