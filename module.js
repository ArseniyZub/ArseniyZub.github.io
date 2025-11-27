module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}