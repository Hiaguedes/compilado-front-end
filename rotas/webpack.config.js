var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000
  },
  entry: "./assets/js/app.js"
  ,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
  ,
  plugins: [
      new HtmlWebpackPlugin({
          template: "./index.html",
          filename: "index.html"
      })
  ],
  module: { 
      rules:[
          {
          test:/\.css$/i,
          use: ['style-loader', 'css-loader']
          }
        ],
     },
};