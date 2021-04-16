# vue-dev-environment


## What Will Be Covered
- Webpack
- Babel
- PostCSS
- SASS
- ESLint

## Webpack
- A bundler. 

### Why bundling files is important? 
- Which would load faster? __One 20kb file__ or __Two 10kb files__?
+ One 20kb file because __each__ file request takes time. 
- Easier to load. 

To Install Webpack: 

```
npm install webpack webpack-cli --save
```

For script / start, the default mode is production mode, where webpack will try its best to minify the files. 
The development mode comes with features that will help with debugging. 
```
"start": "webpack --mode=development" 
```

## Babel