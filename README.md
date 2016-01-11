# React starter kit

A simple starter kit for new webpack projects with ES6 and react.

## Getting started

Copy this repo's files and directories into a new project without the git stuff:

```
git checkout-index -a --prefix=PATH_TO_PROJECT/YOUR_PROJECT_NAME/
```

Fill out project name and description in `package.json`.

## Running the app

```
cd PATH_TO_PROJECT/YOUR_PROJECT_NAME
npm install
npm run watch
```

Then open `dist/index.html`.

### Directory structure

```
.
├── webpack.config.js        # Webpack configuration
├── dist
    └── app.js               # Compiled JS bundle
├── src                      # Application source code
│   ├── app.jsx              # JS entry point for bundle
└── test                     # Tests
```