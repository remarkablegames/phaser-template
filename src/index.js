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

document.addEventListener('DOMContentLoaded', () => {
  resize();
  window.addEventListener('resize', resize);
});

function resize() {
  const { canvas } = game;

  let width;
  let height;

  if (window.innerWidth) {
    // use browser dimensions
    width = window.innerWidth;
    height = window.innerHeight;
  } else {
    // otherwise fallback to device dimensions
    width = window.screen.width;
    height = window.screen.height;
  }

  // calculate aspect ratios
  const windowRatio = width / height;
  const gameRatio = canvas.width / canvas.height;

  let newWidth;
  let newHeight;

  // resize depending on aspect ratio
  if (windowRatio < gameRatio) {
    newWidth = width;
    newHeight = width / gameRatio;
  } else {
    newWidth = height * gameRatio;
    newHeight = height;
  }

  canvas.style.width = newWidth + 'px';
  canvas.style.height = newHeight + 'px';
}
