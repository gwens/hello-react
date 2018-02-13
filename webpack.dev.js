const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    publicPath: "/temp/",
    filename: "bundle.js"
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});