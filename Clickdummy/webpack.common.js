const path = require("path");
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  entry: {
    'service-worker': "./src/JavaScripts/01-generic/service-worker.js",
    default: [
      path.resolve(__dirname, './src/JavaScripts/index.js'),
      path.resolve(__dirname, './src/Stylesheets/default.scss')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(hbs)$/i,
        use: [
          {
            loader: 'handlebars-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, './src/Stylesheets')
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/index.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'notifications.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/index--notifications.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'friends.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/index--friends.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'new-recipe.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/new-recipe.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'cookbook.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/cookbook.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'profile.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/profile.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'friend-list.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/friendlist.hbs')
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, './src/Fonts'), to: 'Fonts' },
        { from: path.resolve(__dirname, './src/Icons'), to: 'Icons' },
        { from: path.resolve(__dirname, './src/Images'), to: 'Images' },
        { from: path.resolve(__dirname, './src/Json'), to: 'Json' }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'Stylesheets/[name].[hash].css',
      chunkFilename: '[name].[hash].css'
    })
  ]
}