const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const production = argv.mode === 'production';
  return {
    context: __dirname,
    entry: './src/index.jsx',
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'script.js'
    },
    devtool: production ? false : 'cheap-module-eval-source-map',
    stats: 'errors-only',
    devServer: {
      hot: true,
      compress: true,
      overlay: true,
      stats: 'errors-only',
      contentBase: path.join(__dirname, 'public')
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10 * 1024,
                name: '[name].[hash].[ext]'
              }
            },
            {
              loader: 'img-loader'
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'url-svg-loader'
        }
      ]
    },
    plugins: [new webpack.ProgressPlugin()]
  };
};
