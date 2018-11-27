# phaser-template

A template for building [Phaser](https://phaser.io/) games.

The template is scaffolded from [web-app-template](https://github.com/remarkablemark/web-app-template) and inspired by “[Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game)” tutorial.

See [demo](https://remarkablegames.github.io/phaser-template/).

## Installation

Clone repository:

```sh
$ git clone https://github.com/remarkablegames/phaser-template.git
```

Rename project:

```sh
$ mv phaser-template my-game
$ cd my-game
$ git grep -l phaser-template | xargs sed -i '' -e 's/phaser-template/mygame/g'
$ git grep -l 'Phaser Template' | xargs sed -i '' -e 's/Phaser Template/mygame/g'
```

The following files need to be manually updated:

- README.md
- package.json
- public/index.html
- public/manifest.json

Initialize new repository:

```sh
$ rm -rf .git
$ git init
```

Install dependencies:

```sh
# with npm
$ npm install

# or with yarn
$ yarn
```

Make initial commit:

```sh
$ git add .
$ git commit -m "chore: first commit"
```

Notice that the commit message follows the [Conventional Commits](https://conventionalcommits.org) format. This will help with releasing.

[Push to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) or to another remote:

```sh
$ git remote add origin <remote-repository-url>
$ git push origin -u origin master
```

## Scripts

Run development server:

```sh
# with npm
$ npm start

# with yarn
$ yarn start
```

Build for production:

```sh
# with npm
$ npm run build

# or with yarn
$ yarn build
```

Release with [standard-version](https://github.com/conventional-changelog/standard-version):

```sh
# with npm
$ npm run build

# or with yarn
$ yarn build
```

Deploy to `gh-pages`:

Before deploying, make sure the `deploy` script and the `homepage` field in `package.json` are correct.

The current setup deploys to [GitHub Pages](https://pages.github.com) by pushing the `build` directory to the remote repository's `gh-pages` branch.

```sh
# with npm
$ npm run deploy

# or with yarn
$ yarn deploy
```

## Test

There are no tests in the template, only linting:

```sh
# with npm
$ npm run lint
$ npm run lint:fix

# or with yarn
$ yarn lint
$ yarn lint:fix
```

Feel free to add a [testing framework](https://github.com/sorrycc/awesome-javascript#testing-frameworks) of your choice.

## Layout

Directory structure (with files like `LICENSE` and dotfiles omitted):

```
.
├── config
│   ├── env.js
│   ├── paths.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── public
│   ├── index.html
│   └── manifest.json
├── scripts
│   ├── build.js
│   └── start.js
└── src
    ├── assets
    │   ├── dude.png
    │   ├── platform.png
    │   ├── sky.png
    │   └── star.png
    ├── index.css
    ├── index.js
    ├── registerServiceWorker.js
    ├── shared
    │   └── index.js
    ├── sprites
    │   ├── Ground.js
    │   ├── Player.js
    │   ├── Star.js
    │   └── index.js
    ├── scenes
    │   ├── Boot.js
    │   ├── Main.js
    │   └── index.js
    └── texts
        ├── Score.js
        └── index.js
```

## License

[MIT](LICENSE)
