import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Phaser from 'phaser';

new Phaser.Game(800, 600, Phaser.AUTO, document.getElementById('game'));

registerServiceWorker();
