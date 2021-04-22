# Vue Developer Environment


## What Will Be Covered
- Webpack
- Babel
- PostCSS
- SASS
- ESLint

## Webpack
- A bundler. [Webpack](https://webpack.js.org/)

### Webpack Core Concepts
- Entry
- Output
- Loaders
    - Webpack __ONLY__ understands JavaScript. 
    - If webpack comes across a non JavaScript file (e.g. HTML, CSS), then it needs to be told how to process that file. 
    - Loaders instrct webpacl how to process and handle non JavaScript files. 
    - Babel is a loader. 
- Plugins 
    - Extend the functionality of Webpack. e.g. delete files, start a server, deploy the app, etc.

### Why bundling files is important? 
- Which would load faster? __One 20kb file__ or __Two 10kb files__?
+ One 20kb file because __each__ file request takes time. 
- Easier to load. 

To Install Webpack: 

```
npm install webpack webpack-cli --save
```

Need to create a webpack config file. This file contains the settings for Webpack. We can modify how Webpack behaves through it. 

The entry file is considered the main file for our app. The responsibility is to load other files that we need for our application to function. Therefore, there is an option to define multiple entry points. 

If we don't have an entry file, Webpack will assume there's a source folder with a file named "index.js". 

Node provides a variable for helping us generate a system pack called "__dirname". Dist is short for "distribution". 

```
module.exports = {
    entry: './index.js',
    output: { // outputs a bundle file
        filename: 'bundle.js',
        path: __dirname + '/dist' // where bundle.js will be saved
    },
    mode: 'development'
}
```

To run Webpack, input following command: 

```
./node_modules/.bin/webpack
```

Adding the "start" script will simplify the process to run Webpack. 

For script / start, the default mode is production mode, where webpack will try its best to minify the files. 
The development mode comes with features that will help with debugging. 

```
"start": "webpack --mode=development"
```

## Babel

- __Babel is a JavaScript compiler__ that will enable us to use JavaScript syntax that may not be available in some browsers. It'll make sure our code is compatible. [Babel](https://babeljs.io/)
- Can be used without Webpack and vice versa. 
- Babel is a module library. 

Babel Modules
- Babel Core
- Babel Preset
- Babel Loader

To install Babel:

```
npm install --save-dev @babel/core @babel/preset-env babel/loader
```

## SASS
- Commonly used for web development. Built on top of CSS. 
- Sometimes referred as Pre-Processor language because it's a language that gets compiled to CSS. 
- SASS bundles all CSS together. If there's imports, it will be bundled into one. Can safely split code into different files to organize code.
- Not natively supported by web browsers. Use webpack to compile SASS into CSS. 

```
npm install node-sass sass-loader css-loader --save-dev
```

- node-sass takes care of compiling SASS code into CSS. This module can be used without webpack. 

```
npm install style-loader --save-dev
```

- Style loader extracts css from the bundle. 

```
npm install mini-css-extract-plugin --save-dev
```

* Supports variables. Must start with __$__. 

## PostCSS
- A Post processessor for CSS. 
- Not a language. It's a library written in JS. It compiles CSS to an Object, and compiled back into CSS. 

```
npm install postcss-loader --save-dev

// --save-dev is used to save the package for development purpose. Example: unit tests, minification..
--save is used to save the package required for the application to run.
```

- PostCSS module expects CSS and will return CSS once it is done processing it. 
- Need a separate configuration because it is a separate library.


- Use with plugins. 

```
npm install autoprefixer --save-dev
```

## Linting
- Linting is the process of reviewing your code for consistencies. It's essentially a __code quality__ reviewer.

ESLint

```
npm install -g eslint
```
