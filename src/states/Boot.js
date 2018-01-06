import { State } from 'phaser';
import Load from './Load';

export default class Boot extends State {
  static key = 'boot';

  init() {
    this.state.start(Load.key);
  }
}
