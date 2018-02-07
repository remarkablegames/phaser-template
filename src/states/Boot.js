import { ScaleManager, State } from 'phaser';
import Load from './Load';

export default class Boot extends State {
  static key = 'boot';

  init() {
    const { scale } = this;
    scale.scaleMode = ScaleManager.SHOW_ALL;
    scale.pageAlignHorizontally = true;
    scale.pageAlignVertically = true;

    this.state.start(Load.key);
  }
}
