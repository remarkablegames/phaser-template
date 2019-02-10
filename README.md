# phaser-template

A template for building [Phaser 3](https://phaser.io/) games.

The base boilerplate is from [`web-app-template`](https://github.com/remarkablemark/web-app-template) and the game is inspired by the tutorial “[Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game)”.

<kbd>[Play Demo](https://remarkablegames.github.io/phaser-template/)</kbd>

## Prerequisites

- [Node.js 8.6+](https://nodejs.org/en/download/)
- [npm 5.3+](https://www.npmjs.com/get-npm) or [Yarn 1+](https://yarnpkg.com/lang/en/docs/install/)

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

You should also update the following files:

- [ ] README.md
- [ ] package.json
- [ ] public/index.html
- [ ] public/manifest.json
- [ ] src/index.js

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

> Commit messages follow the [Conventional Commits](https://conventionalcommits.org/) format. (Used when releasing a new version.)

Don't forget to [push the local repository to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) or to another remote repository:

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

It force pushes the `./build/` directory to the remote repository's `gh-pages` branch.

## Test

There are no tests, just linting:

```sh
# with npm
$ npm run lint
$ npm run lint:fix

# or with yarn
$ yarn lint
$ yarn lint:fix
```

Feel free to add a [testing framework](https://github.com/sorrycc/awesome-javascript#testing-frameworks) of your choice.

For manual testing, you can build the (production) game locally:

```sh
# git stash
$ sed -i '' '/homepage/d' package.json
$ npm run build # yarn build
# git checkout -- package.json
# git stash pop
```

Start a local server:

```sh
$ cd build
$ python -m SimpleHTTPServer
# press `Ctrl + C` to stop the server
```

And access it on `localhost:8000`:

```sh
$ open http://localhost:8000
```

## Layout

Directory structure (dotfiles are omitted):

```sh
$ tree -I 'build|node_modules'
.
├── LICENSE
├── README.md
├── config
│   ├── env.js
│   ├── paths.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   └── webpackDevServer.config.js
├── package.json
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
    ├── constants
    │   └── index.js
    ├── index.css
    ├── index.js
    ├── registerServiceWorker.js
    ├── scenes
    │   ├── Boot.js
    │   ├── Main.js
    │   └── index.js
    ├── sprites
    │   ├── Player.js
    │   ├── Star.js
    │   └── index.js
    └── texts
        ├── Score.js
        └── index.js

9 directories, 28 files
```

## License

[MIT](LICENSE)
