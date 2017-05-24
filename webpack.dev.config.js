var webpack = require('webpack'),
config = require('./webpack.config.js');

config.devtool = 'eval';

config.devServer = {
  inline: true,
  port: 8080,
  contentBase: "src/client/static/",
  historyApiFallback: {
    index: '/index-static.html'
  }
}

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development')
    }
  })
);

module.exports = config;