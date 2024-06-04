# Contribution

Please install [Node.js and npm](https://nodejs.org/en/download/package-manager).

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source $HOME/.bashrc
nvm install 20
node -v
npm -v
```

Please install VSCode extensions.

- Auto Rename Tag
- ES7+ React/Redux/React-Native snippets
- Highlight Matching Tag
- ESLint
- Prettier - Code formatter
- Tailwind CSS IntelliSense

Please install the dependencies.

```bash
npm install
```

To update the dependencies.

```bash
npm update --save
```

To start the application in development mode.

```bash
npm run dev
```

# Deployment

For Github Pages:

```bash
git worktree add gh-pages && cd gh-pages
cd frontend && npm run build && cd ..
mv frontend/dist .
ls -A | grep -Ev "^(\.git|dist)$" | xargs rm -rf
mv dist/* . && rm -rf dist
touch .nojekyll
git add .
git commit -m "DONE: Add 'Deployment for Github Pages'"
git push --set-upstream origin gh-pages --force

cd frontend
npm run build
git branch -D gh-pages 2>/dev/null
git checkout --orphan gh-pages
git branch -D gh-pages
cd ..
```
