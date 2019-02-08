import './index.css';
import { Boot, Main } from './scenes';
import Phaser from 'phaser';
import { addResizeListener } from './helpers/resize';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

/**
 * @see {@link https://photonstorm.github.io/phaser3-docs/global.html#GameConfig}
 */
const config = {
  backgroundColor: '#000',
  width: 800,
  height: 600,
  title: 'Phaser Template',
  // the following 2 values are from `package.json`
  url: process.env.HOMEPAGE,
  version: process.env.VERSION,
  scene: [Boot, Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: process.env.NODE_ENV === 'development',
    },
  },
  disableContextMenu: true,
};

const game = new Phaser.Game(config);
addResizeListener(game);
