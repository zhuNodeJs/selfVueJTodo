const path = require('path');
module.exports = {
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
      }
    ]
  }

}