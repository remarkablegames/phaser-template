import { ScaleManager, State } from 'phaser';
import Load from './Load';

export default class Boot extends State {
  static key = 'boot';

  init() {
    this.scale.scaleMode = ScaleManager.SHOW_ALL;
    this.state.start(Load.key);
  }
}
