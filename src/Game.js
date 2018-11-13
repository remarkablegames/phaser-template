import Phaser from 'phaser';
import { Boot, Load, Main } from './states';
import { STATES } from './constants';

export default class Game extends Phaser.Game {
  /**
   * @param {Number|String}      [width=800]  - The game width.
   * @param {Number|String}      [height=600] - The game height.
   * @param {Number}             [renderer=0] - The renderer to use: AUTO, WEBGL, CANVAS, HEADLESS.
   * @param {String|HTMLElement} [parent='']  - The parent element or id.
   */
  constructor(width = 800, height = 600, renderer = Phaser.AUTO, parent = '') {
    super(width, height, renderer, parent);
    const { state } = this;

    state.add(STATES.BOOT, Boot, false);
    state.add(STATES.LOAD, Load, false);
    state.add(STATES.MAIN, Main, false);

    state.start(STATES.BOOT);
  }
}
