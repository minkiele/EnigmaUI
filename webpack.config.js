module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    filename: 'dist/main.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader'
    }]
  }
};
