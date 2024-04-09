import Phaser from 'phaser';

import * as scenes from './scenes';

/**
 * https://rexrainbow.github.io/phaser3-rex-notes/docs/site/game/
 */
new Phaser.Game({
  width: 800, // 1024
  height: 600, // 768
  title: 'Phaser Template',
  url: import.meta.env.VITE_APP_HOMEPAGE,
  version: import.meta.env.VITE_APP_VERSION,
  scene: [
    scenes.Boot,
    ...Object.values(scenes).filter((scene) => scene !== scenes.Boot),
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        x: 0,
        y: 300,
      },
      debug: import.meta.env.DEV,
    },
  },
  disableContextMenu: import.meta.env.PROD,
  backgroundColor: '#fff',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
