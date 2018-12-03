import './index.css';
import { Boot, Main } from './scenes';
import Phaser from 'phaser';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

/**
 * @see {@link https://photonstorm.github.io/phaser3-docs/global.html#GameConfig}
 */
const config = {
  width: 800,
  height: 600,
  title: 'Phaser Template',
  url: 'https://remarkablegames.org/phaser-template/',
  version: '0.0.0',
  scene: [Boot, Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: process.env.NODE_ENV === 'development',
    },
  },
};

new Phaser.Game(config);
