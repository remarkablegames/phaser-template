require('./index.css');

// Because development uses the local version of Phaser 2,
// make sure to expose the global vars so the library can work properly
// https://github.com/photonstorm/phaser#browserify--cjs
if (process.env.NODE_ENV === 'development') {
  window.PIXI = require('phaser/build/custom/pixi');
  window.p2 = require('phaser/build/custom/p2');
  window.Phaser = require('phaser/build/custom/phaser-split');
}

const Game = require('./Game').default;
new Game();

require('./registerServiceWorker').default();
