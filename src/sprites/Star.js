import { TEXTURES } from '../constants';

const { Math, Physics } = window.Phaser;

export default class Star extends Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.STAR);

    // Reset drawing position of image to the top-left.
    this.setOrigin(0);
  }

  init() {
    // Give the sprite some bounce.
    this.body.setBounceY(Math.FloatBetween(0.4, 0.8));
  }
}
