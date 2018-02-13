const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  output: {
    publicPath: "/",
    filename: 'bundle.js'
  },
  devServer: {
     contentBase: './src'   
  }
});
