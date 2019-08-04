const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
module.exports = {
  entry: "./src/contents.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
  devServer: {
    contentBase: [path.join(__dirname, "dist")],
    hot: false,
    watchContentBase: true,
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, "manifest.json"),
        to: path.resolve(__dirname, "dist"),
      },
      {
        from: path.resolve(__dirname, "src/index.html"),
        to: path.resolve(__dirname, "dist"),
      },
      {
        from: path.resolve(__dirname, "images"),
        to: path.resolve(__dirname, "dist/images"),
      },

      {
        from: path.resolve(__dirname, "src/css"),
        to: path.resolve(__dirname, "dist/css"),
      },
    ]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
};
