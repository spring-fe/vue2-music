
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('./webpack.config')

config.output.publicPath = '/';

config.plugins = [
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'src/index.html',
        template: path.resolve(__dirname, '../src/index.html'),
        inject: true
    }),
     new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
];

// add hot-reload related code to entry chunks
Object.keys(config.entry).forEach(function(name) {
    config.entry[name] = ['./build/dev-client'].concat(config.entry[name])
    console.log(config.entry[name])
})


module.exports = config;