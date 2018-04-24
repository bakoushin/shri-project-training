const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const production = argv.mode === 'production';
  return {
    context: __dirname,
    entry: './src/index.js',
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
      stats: 'errors-only'
    },
    module: {
      rules: [
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
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
      // new CleanWebpackPlugin([basename(projectPath.dist)], {root: projectPath.root}),
    ]
  };
};
