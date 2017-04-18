const path = require("path");
const webpack = require("webpack");

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  devtool: debug ? "eval" : "cheap-module-source-map",
  entry: path.join(__dirname, "app", "index.jsx"),
  devServer: {
    inline: true,
    port: 8080,
    contentBase: "dist/"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
           presets: [ "react", "es2015" ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};