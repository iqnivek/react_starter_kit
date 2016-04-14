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
npm start
```

Then open `dist/index.html`.

## Testing and linting

```
npm test
npm run lint
```

## Adding dependencies

```
npm install --save <package>
npm install --save-dev <package>
npm run shrinkwrap
```

## Directory structure

```
.
├── webpack.config.js        # Webpack configuration
├── dist
    └── bundle.js            # Compiled JS bundle
├── src                      # Application source code
│   ├── index.jsx            # JS entry point for bundle
└── test                     # Tests
```
