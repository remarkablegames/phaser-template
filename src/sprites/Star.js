import { Math, Physics } from 'phaser';
import { TEXTURES } from '../constants';
import { groups } from '../shared';

export default class Star extends Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.STAR);
    groups.stars.add(this, scene);

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Reset the drawing position of the image to the top-left.
    this.setOrigin(0);

    // Enable physics for sprite.
    scene.physics.world.enable(this);

    // Sprite physics properties.
    this.body.setBounceY(Math.FloatBetween(0.4, 0.8));

    // Collide the star with the platform or else the star will fall through.
    scene.physics.add.collider(this, groups.platforms);
  }
}
