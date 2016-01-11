module.exports = {
  context: __dirname,
  entry: './src/main.jsx',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: [__dirname + '/node_modules'],
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true
        }
      }
    ]
  }
};
