const path = require('path');
const HTMLPlugin = require('html-webpack-plugin'); // 动态生成html文件
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === 'development';

const config = {
  target: 'web',
  entry: path.join(__dirname,'src/index.js'),
  output: {
    filename:'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // 将css文件插入到style中
          "css-loader" // 读取css文件
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aa.[ext]' // name表示传入的文件的名字, ext显示文件的扩展名
            }
          }
        ]
      },
      {
        test:/\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
    // 定义可在全局使用的常量,在这里定义，在js工程中可以引用
    // 记住在单引号中要加入双引号
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
}

if (isDev) { // 如果是开发环境
  config.devtool = '#cheap-module-inline-source-map'; // 效率高，正确性高一点
  config.devServer = {
    port: 8005, // 启动的服务的端口
    host: '0.0.0.0', // 即可以使用127.0.0.1也可以通过内网IP进行访问
    overlay: { // 编译有错误，显示在网页上
      errors: true
    },
    //open: true, // 启动编译的时候自动打开浏览器, 即打开一个新的浏览器页面    
    hot: true // 更改组件的代码，只更新当前组件, 不是整个页面都加载
  };
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(), // 局部更新内容的插件, 功能的插件
    new webpack.NoEmitOnErrorsPlugin(), // 有编译错误时忽略发出的语句
    new webpack.NamedModulesPlugin()
  )
}

module.exports = config;