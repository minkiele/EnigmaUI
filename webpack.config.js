var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
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
    new webpack.HotModuleReplacementPlugin(),
    //Se necesita plugin otherwise bootstrap won't load
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.join(__dirname, 'node_modules/enigma-minkiele'),
        path.join(__dirname, 'src')
      ],
      loaders: ['react-hot', 'babel-loader', 'webpack-module-hot-accept']
    }]
  }
};
