import { Scene } from 'phaser';
import { SCENES } from '../constants';

export default class Boot extends Scene {
  constructor() {
    super({ key: SCENES.BOOT });
  }

  init() {
    this.scene.start(SCENES.LOAD);
  }
}
