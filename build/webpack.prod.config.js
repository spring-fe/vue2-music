const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');


const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, '../dist')
}

module.exports = merge(require('./webpack.config'), {
  output: {
    path: PATHS.dist,
    publicPath: '/vue2-music/dist/',
    filename: `js/[name].[chunkhash:8].js`, // hash输出8位
    chunkFilename: `js/[name].[chunkhash:8].js`,
  },
  devtool: false,
  
})