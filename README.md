# phaser-template

<kbd>phaser-template</kbd> is a template for creating [Phaser 3](https://phaser.io/) games. It's written in HTML, CSS, and JavaScript.

This project was bootstrapped with [`web-app-template`](https://github.com/remarkablemark/web-app-template).

The [game](https://remarkablegames.org/phaser-template/) is inspired by the tutorial [Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game).

This project can also be found on [Repl.it](https://repl.it/talk/share/Phaser-Template/22850).

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/lang/en/docs/install/)

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

Update additional files:

- [ ] README.md
- [ ] package.json
- [ ] public/index.html
- [ ] public/manifest.json
- [ ] src/index.js

Install dependencies:

```sh
$ npm install
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

> Commit messages follow the [Conventional Commits](https://conventionalcommits.org/) format, which is used when releasing a new version.

Don't forget to [push the local repository to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) or to another remote repository:

```sh
$ git remote add origin <remote-repository-url>
$ git push origin -u origin master
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run release`

Bumps the `package.json` using [standard-version](https://github.com/conventional-changelog/standard-version).

### `npm run deploy`

Deploys the app to [GitHub Pages](https://pages.github.com/) by force pushing the `build` folder to the remote repository's `gh-pages` branch.

## Environment Variables

Environment variables work the same as [create-react-app](https://facebook.github.io/create-react-app/docs/adding-custom-environment-variables) except the custom environment variables begin with `APP_` instead of `REACT_APP_`.

## Test

There are no tests, just linting:

```sh
$ npm run lint
$ npm run lint:fix
```

Feel free to add a [testing framework](https://github.com/sorrycc/awesome-javascript#testing-frameworks) of your choice.

You can build the production game (to test locally before deploying):

```sh
# git stash
$ sed -i '' '/homepage/d' package.json
$ npm run build
# git checkout -- package.json
# git stash pop
```

Start a server:

```sh
$ cd build
$ python -m SimpleHTTPServer
# press `Ctrl + C` to stop the server
```

Play the game:

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
│   ├── modules.js
│   ├── paths.js
│   ├── pnpTs.js
│   ├── webpack.config.js
│   └── webpackDevServer.config.js
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── scripts
│   ├── build.js
│   ├── deploy.sh
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
    ├── scenes
    │   ├── Boot.js
    │   ├── Main.js
    │   └── index.js
    ├── serviceWorker.js
    ├── sprites
    │   ├── Player.js
    │   ├── Star.js
    │   └── index.js
    └── texts
        ├── Score.js
        └── index.js

9 directories, 32 files
```

## Diff

Compared to [`web-app-template`](https://github.com/remarkablemark/web-app-template), the additional dependencies saved to `package.json` are:

- [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-preset-env)

## License

[MIT](LICENSE)
