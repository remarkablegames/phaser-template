import Phaser from 'phaser';
import { Boot, Load } from './states';

export default class Game extends Phaser.Game {
  constructor() {
    // width, height, renderer, parent
    super(800, 600, Phaser.AUTO, document.getElementById('game'));

    this.state.add(Boot.key, Boot, false);
    this.state.add(Load.key, Load, false);

    this.state.start(Boot.key);
  }
}
