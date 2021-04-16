# vue-dev-environment


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
+ Webpack __ONLY__ understands JavaScript. 
+ If webpack comes across a non JavaScript file (e.g. HTML, CSS), then it needs to be told how to process that file. 
+ Loaders instrct webpacl how to process and handle non JavaScript files. 
+ Babel is a loader. 
- Plugins 
+ Extend the functionality of Webpack. e.g. delete files, start a server, deploy the app, etc.

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
- __Babel is a JavaScript compiler__ that will enable us to use JavaScript syntax that may not be available in some browsers. It'll make sure our code is compatible. [Babel](​https://babeljs.io/)
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