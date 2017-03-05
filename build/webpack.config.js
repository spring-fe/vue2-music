var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist')
}

module.exports = {
  entry: {
    app: './src/main.js',// 整个SPA的入口文件, 一切的文件依赖关系从它开始
    vendors: ['vue', 'vue-router']  // 需要进行单独打包的文件
  },
  output: {
    path: PATHS.dist, // 部署文件 相对于根路由
    publicPath: '/dist/',
    filename: '.js/[name].js',
    chunkFilename: 'js/[name].js'   // chunk文件输出的文件名称 具体格式见webpack文档, 注意区分 hash/chunkhash/contenthash 等内容, 以及存在的潜在的坑
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
    extensions: ['.js', '.less', '.vue', '*', '.json']  
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../dist/index.html'),
        template: path.resolve(__dirname, '../src/index.html')
    }),
    new ExtractTextPlugin({                                   // css抽离插件,单独放到一个style文件当中.
      filename: `css/style.css`,
      allChunks: true,
      disable: false
    }),
    // 将vue等框架/库进行单独打包, 并输入到vendors.js文件当中
    // 这个地方commonChunkPlugin一共会输出2个文件, 第二个文件是webpack的runtime文件
    // runtime文件用以定义一些webpack提供的全局函数及需要异步加载的chunk文件
    // 具体的内容可以看我写的blog 
    // [webpack分包及异步加载套路](https://segmentfault.com/a/1190000007962830)
    // [webpack2异步加载套路](https://segmentfault.com/a/1190000008279471)
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest']
    })
  ]
  
}
