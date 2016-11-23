var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: [
      path.join(__dirname, 'src/app.js')
    ]
  },
  output: {
    publicPath: '/js/',
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.join(__dirname, 'node_modules/enigma-minkiele'),
        path.join(__dirname, 'src')
      ],
      loaders: ['babel-loader']
    }]
  }
};
