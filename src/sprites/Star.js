import { TEXTURES } from '../constants';

class Star extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.STAR);

    // Reset drawing position of image to the top-left.
    this.setOrigin(0);
  }

  init() {
    // Give the sprite some bounce.
    this.body.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  }
}

export default Star;
