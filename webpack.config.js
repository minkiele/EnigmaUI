module.exports = {
  context: __dirname,
  entry: [
    //'babel-polyfill',
    './src/app.js'
  ],
  output: {
    filename: 'dist/js/app.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader'
    }]
  }
};
