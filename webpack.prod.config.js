var webpack = require('webpack'),
config = require('./webpack.config.js');
const CompressionPlugin = require("compression-webpack-plugin");

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    mangle: true,
    sourcemap: false,
    beautify: false,
    dead_code: true,
    comments: false
  })
)

module.exports = config;