import { Physics } from 'phaser';
import { TEXTURES } from '../constants';
import { groups } from '../shared';

export default class Ground extends Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, TEXTURES.GROUND);
    groups.platforms.add(this);

    // Add the sprite to the scene.
    scene.add.existing(this);

    // Enable physics for the sprite.
    scene.physics.world.enable(this);

    // This stops the sprite from falling away when you jump on it.
    this.body.immovable = true;
  }
}
