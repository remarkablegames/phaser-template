import { ScaleManager, State } from 'phaser';
import { STATES } from '../constants';

export default class Boot extends State {
  init() {
    const { scale } = this;
    scale.scaleMode = ScaleManager.SHOW_ALL;
    scale.pageAlignHorizontally = true;
    scale.pageAlignVertically = true;

    this.state.start(STATES.LOAD);
  }
}
