# vue-dev-environment


## What Will Be Covered
- Webpack
- Babel
- PostCSS
- SASS
- ESLint

## Webpack
- A bundler. [Webpack](https://webpack.js.org/)

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