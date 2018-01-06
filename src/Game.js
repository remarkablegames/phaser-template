import Phaser from 'phaser';
import { Boot, Load, Main } from './states';

export default class Game extends Phaser.Game {
  constructor() {
    // width, height, renderer, parent
    super(800, 600, Phaser.AUTO, document.getElementById('game'));

    this.state.add(Boot.key, Boot, false);
    this.state.add(Load.key, Load, false);
    this.state.add(Main.key, Main, false);

    this.state.start(Boot.key);
  }
}
