module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.ts', '.js', '.css']
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
