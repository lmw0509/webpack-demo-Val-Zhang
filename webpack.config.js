const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  //生成一个对应的.js.map文件
  devtool: 'source-map',
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "index_bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      use: {
        loader: "babel-loader",
      },
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "postcss-loader"
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/temp.html"
    }),
    // dist目录下的东西清除、重新生成
    new CleanWebpackPlugin()
  ]
}