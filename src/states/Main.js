import { State } from 'phaser';
import { Star } from '../sprites';

export default class Main extends State {
  /** State key. */
  static key = 'main';

  create() {
    new Star(this.game, 0, 0);
  }
}
