var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "app": "./app/main.ts"
  },
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts/,
        loader: 'ts'
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: "./index.html"
      })
  ]
}