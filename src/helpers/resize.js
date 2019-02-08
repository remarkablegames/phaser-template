/**
 * Adds resize listener for game canvas.
 *
 * @example
 * const game = new Phaser.Game(config);
 * addResizeListener(game);
 *
 * @param  {Phaser.Game}       game        - The game object.
 * @param  {HTMLCanvasElement} game.canvas - The canvas element.
 * @return {Function}                      - The resize listener.
 */
export const addResizeListener = game => {
  /**
   * Resizes the game canvas.
   */
  const resize = () => {
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
  };

  // resize and add event listener on load or else canvas will be undefined
  document.addEventListener('DOMContentLoaded', () => {
    resize();
    window.addEventListener('resize', resize);
  });

  return resize;
};
