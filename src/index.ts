import './style.css';

import { Game, Scale } from 'phaser';

import { Boot, Main } from './scenes';

const isProduction = process.env.NODE_ENV === 'production';

/**
 * https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig
 */
const config = {
  width: 800, // 1024
  height: 600, // 768
  title: 'Phaser Template',
  url: 'https://remarkablegames.org/phaser-template/',
  version: process.env.VERSION,
  scene: [Boot, Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 300,
      },
      debug: !isProduction,
    },
  },
  disableContextMenu: isProduction,
  backgroundColor: '#fff',
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
};

new Game(config);
