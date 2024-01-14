# phaser-template

<kbd>phaser-template</kbd> is a template for making [Phaser](https://phaser.io/) games.

Inspired by the tutorial "[Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game)".

Demo:

- [remarkablegames](https://remarkablegames.org/phaser-template/)
- [Replit](https://replit.com/talk/share/Phaser-Template/22850)
- [CodeSandbox](https://codesandbox.io/s/phaser-template-4fy4y)

Stack:

- [Phaser](https://phaser.io/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm#readme)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/phaser-template.git
cd phaser-template
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

Install the dependencies:

```sh
npm install
```

Initialize a new repository:

```sh
rm -rf .git
git init
```

Make your first commit:

```sh
git add .
git commit -m 'feat: initialize project from phaser-template'
```

> Commit messages follow the [Conventional Commits](https://conventionalcommits.org/) format, which is used during release.

Once you're ready, [push the local repository to GitHub](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/) (or another remote repository):

```sh
git remote add origin <remote-repository-url>
git push origin -u origin master
```

## Environment Variables

Set the environment variables:

```sh
less .env
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

## Upload

Open `index.html` and remove the GitHub Corners script.

Build the game artifacts:

```sh
npm run build
```

Replace absolute URLs with relative URLs:

```sh
sed -i '' -e 's|src="/|src="|g' -e 's|href="/|href="|g' dist/index.html
```

Zip the game artifacts (replace `<version>` with the semver):

```sh
zip -r <version>.zip dist
```

Upload the zip archive to the game platform.

## License

[MIT](LICENSE)
