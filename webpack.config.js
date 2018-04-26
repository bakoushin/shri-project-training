const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
  const production = argv.mode === 'production';
  const development = !production;
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
      compress: true,
      overlay: true,
      stats: 'errors-only',
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
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
          test: /\.s?css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                minimize: production,
                sourceMap: development,
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: development
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: development
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
