# phaser-template

A template for building [Phaser](https://phaser.io/) games.

The template is scaffolded from [web-app-template](https://github.com/remarkablemark/web-app-template) and inspired by “[Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game)” tutorial.

See [demo](https://remarkablegames.github.io/phaser-template/).

## Prerequisites

- [Node.js 8+](https://nodejs.org/en/download/)
- [npm 5.3+](https://www.npmjs.com/get-npm) or [yarn 1+](https://nodejs.cior://yarnpkg.com/)

## Installation

Clone repository:

```sh
$ git clone https://github.com/remarkablegames/phaser-template.git
```

Rename project:

```sh
$ mv phaser-template my-game
$ cd my-game
$ git grep -l phaser-template | xargs sed -i '' -e 's/phaser-template/my-game/g'
$ git grep -l 'Phaser Template' | xargs sed -i '' -e 's/Phaser Template/My Game/g'
```

You should also update the files:

- README.md
- package.json
- public/index.html
- public/manifest.json

Install dependencies:

```sh
# with npm
$ npm install

# or with yarn
$ yarn
```

Initialize new repository:

```sh
$ rm -rf .git
$ git init
```

Make first commit:

```sh
$ git add .
$ git commit -m "feat: initialize project from phaser-template"
```

> The commit message should follow the [Conventional Commits](https://conventionalcommits.org) format. (It becomes useful during a release.)

Don't forget to [push the local repository to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) or another remote:

```sh
$ git remote add origin <remote-repository-url>
$ git push origin -u origin master
```

## Scripts

Start development server:

```sh
# with npm
$ npm start

# or with yarn
$ yarn start
```

Build production artifacts:

```sh
# with npm
$ npm run build

# or with yarn
$ yarn build
```

> **Note**: Make sure the `"homepage"` field in `package.json` is correct.

Create a release using [standard-version](https://github.com/conventional-changelog/standard-version):

```sh
# with npm
$ npm run release

# or with yarn
$ yarn release
```

Deploy to [GitHub Pages](https://pages.github.com):

```sh
# with npm
$ npm run deploy

# or with yarn
$ yarn deploy
```

It pushes the `./build/` directory to the remote repository's `gh-pages` branch.

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
