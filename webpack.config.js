const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  stats: 'errors-only',
  //entry: 'index.js',
  output: {
    filename: 'script.js',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    compress: true,
    overlay: true,
    //stats: 'errors-only'
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
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
    //new webpack.ProgressPlugin(),
//    new CleanWebpackPlugin([basename(projectPath.dist)], {root: projectPath.root}),
  ]
};
