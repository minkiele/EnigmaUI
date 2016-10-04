var path = require('path');

module.exports = {
  entry: {
    app: [
      path.join(__dirname, 'src/app.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js'
  },
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
