<p align="center">
  <img src="https://github.com/remarkablegames/phaser-template/blob/master/public/logo192.png" alt="Phaser Template">
</p>

# Phaser Template

![release](https://img.shields.io/github/v/release/remarkablegames/phaser-template)
[![build](https://github.com/remarkablegames/phaser-template/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablegames/phaser-template/actions/workflows/build.yml)

<kbd>phaser-template</kbd> is a template for making [Phaser](https://phaser.io/) games. The template is inspired by the tutorial "[Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game)".

Play the game on:

- [remarkablegames](https://remarkablegames.org/phaser-template/)

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm#readme)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/phaser-template.git
cd phaser-template
```

Install the dependencies:

```sh
npm install
```

Rename the project:

```sh
git grep -l phaser-template | xargs sed -i '' -e 's/phaser-template/my-game/g'
git grep -l 'Phaser Template' | xargs sed -i '' -e 's/Phaser Template/My Game/g'
```

Update the files:

- [ ] `README.md`
- [ ] `package.json`
- [ ] `index.html`
- [ ] `public/manifest.json`
- [ ] `src/index.ts`

## Environment Variables

Update the environment variables:

```sh
cp .env .env.local
```

Update the **Secrets** in the repository **Settings**.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

You will also see any errors in the console.

### `npm run build`

Builds the game for production to the `dist` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

### `npm run bundle`

Builds the game and packages it into a Zip file in the `dist` folder.

Your game can be uploaded to your server, [Itch.io](https://itch.io/), [Newgrounds](https://www.newgrounds.com/), etc.

## License

[MIT](LICENSE)
