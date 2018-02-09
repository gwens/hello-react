const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] }
    ]
  }
}