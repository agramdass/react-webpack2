const path = require('path');
const OccurrenceOrderPlugin = require('webpack/lib/optimize/OccurrenceOrderPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    dev: 'react-hot-loader/patch',
    vendor: './src/vendor.js',
    client: './src/client.js',
  },

  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve('./src'),
      path.resolve('./'),
      path.resolve('./node_modules'),
      path.resolve('./static')
    ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader']
      }
    ]
  },

  plugins: [
    new OccurrenceOrderPlugin(true),
    new CommonsChunkPlugin({
      name: ['client', 'vendor'],
      minChunks: Infinity
    })
  ],
};
