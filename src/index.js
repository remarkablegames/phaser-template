import './index.css';
import { Boot, Main } from './scenes';

const { Game, Scale } = window.Phaser;

/**
 * @see {@link https://photonstorm.github.io/phaser3-docs/global.html#GameConfig}
 */
const config = {
  width: 800,
  height: 600,
  title: 'Phaser Template',
  // see `.env` and `package.json`
  url: process.env.WEB_APP_HOMEPAGE,
  version: process.env.WEB_APP_VERSION,
  scene: [Boot, Main],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: process.env.NODE_ENV === 'development',
    },
  },
  disableContextMenu: true,
  backgroundColor: '#000',
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
};

new Game(config);
