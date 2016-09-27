module.exports = {
  context: __dirname,
  entry: './src/EnigmaUI.js',
  output: {
    filename: 'dist/EnigmaUI.js'
  },
  module: {
    loaders: [{
      loader: 'babel-loader'
    }]
  }
};
