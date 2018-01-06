import Phaser from 'phaser';

export default class Game extends Phaser.Game {
  constructor() {
    // width, height, renderer, parent
    super(800, 600, Phaser.AUTO, document.getElementById('game'));
  }
}
