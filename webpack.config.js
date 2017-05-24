const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "src", "client.jsx"),
  output: {
    path: path.join(__dirname, "src", "client", "static", "js"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: []
};