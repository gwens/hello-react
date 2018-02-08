//const path = require('path'); // Don't know what this is for...
module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: "./public"
  },
  output: {
    //path: path.resolve('dist'), // Don't know what this should be. Create this folder?
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}