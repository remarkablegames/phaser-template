import { Math, Physics } from 'phaser';
import { TEXTURES } from '../constants';

export default class Star extends Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture || TEXTURES.STAR, frame);
    this.setOrigin(0);
  }

  init() {
    this.body.setBounceY(Math.FloatBetween(0.4, 0.8));
  }
}
