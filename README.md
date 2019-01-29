# Electron React ES6 Boilerplate

This is a boilerplate for myself with two goals in mind:
1. get up to speed with `webpack4` and all the latest and greatest improvements since the `webpack@3.10` days
2. learn how to package `electron` applications outside the professional grade boilerplates already in existence

## Commands

```bash
git clone https://github.com/puiu91/electron-react-es6-boilerplate.git
cd electron-react-es6-boilerplate
npm i
npm run build
npm run start
```

## Build Process

Electron spawns from the `main.js` file as targetted by the `main` property in the `package.json` as in `"main": "./src/main.js"`. Inside `main.js`, the electron instance targets the `index.html` file for rendering as in `./build/index.html`. Within the `index.html` file, the actual application is loaded via linked javascript, css, and other files. 

As it stands today, the packaged NodeJS environment in electron requires that the javascript is targetted for compatibility with `es5`. This means that if we want to use `es6` and above, we must transpile the javascript (i.e., using webpack and babel) that is loaded inside the `./build/index.html` file. 

The `npm run build` command will transpile and package the application from `es6` code located in `./src` into `es5` outputted to `./build`. From there, `npm run start` will boot up electron via the `./main.js` file. 

Also note that `./build/index.html` is also generated through webpack at build time - otherwise the `./build` directory is empty. The current webpack build process uses a template html file at `./public/index.ejs` to generate the `./build/index.html` file along with the transpiled `js`, `css`, and other files handled by webpack at build time.

## Notes

### webpack-dev-server

Currently, the application is able to run both through electron and browser via `npm run buildInBrowser`. Think of it like this - both electron and the browser server as an execution environment for application ode. The difference is that electron has both a built in NodeJS and Chromium environment. 

This means that it is possible to run the application in development either in the browser or through electron. The only limitation to this is when using a NodeJS library that cannot be executed in the browser, such as a SQL driver like `sqlite` which runs in NodeJS environments but not in the browser. In other words, libraries which require access to the NodeJS runtime environment will break this dual development capability in both browser and electron.

With all this said, I have left this functionality as a reference.