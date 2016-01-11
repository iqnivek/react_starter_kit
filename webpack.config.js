// TODO see https://github.com/bensmithett/webpack-css-example/blob/master/webpack.config.js

module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
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
      },

      // SCSS
      {
        test: /\.scss$/,
        include: /src/,
        loaders: ['styles', 'css', 'sass']
      }
    ]
  }
};
