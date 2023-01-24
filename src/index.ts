import Phaser from 'phaser';

import scenes from './scenes';
import { isDevelopment, isProduction } from './utils';

/**
 * https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */
new Phaser.Game({
  width: 800, // 1024
  height: 600, // 768
  title: 'Phaser Template',
  url: process.env.URL,
  version: process.env.VERSION,
  scene: scenes,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300,
      },
      debug: isDevelopment,
    },
  },
  disableContextMenu: isProduction,
  backgroundColor: '#fff',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
