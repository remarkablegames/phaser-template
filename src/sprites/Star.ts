import Phaser from 'phaser';

import { Image } from '../types';

export default class Star extends Phaser.Physics.Arcade.Sprite {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    texture = Image.Star,
    frame: string | number
  ) {
    super(scene, x, y, texture || Image.Star, frame);

    // Reset drawing position of image to the top-left
    this.setOrigin(0);
  }
}
