import Phaser from 'phaser';
import { Boot, Load, Main } from './scenes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

const config = {
  // type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: process.env.NODE_ENV === 'development',
    },
  },
  scene: [Boot, Load, Main],
};

new Phaser.Game(config);
