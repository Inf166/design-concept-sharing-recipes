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
      template: path.resolve(__dirname, './src/Snippets/04-templates/notifications.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'friends/search.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/friend-list/search.hbs')
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
      filename: 'friend/add.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/friend/add.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'friend/remove.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/friend/remove.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'friend/retrieve.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/friend/retrieve.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'friends/mine.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/friend-list/default.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'friends/foreign.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/friend-list/foreign.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'settings.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/settings.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'new-recipe/step-2.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/new-recipe/step-2.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'new-recipe/step-3.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/new-recipe/step-3.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'new-recipe/step-4.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/new-recipe/step-4.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'new-recipe/step-5.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/new-recipe/step-5.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'new-recipe/step-6.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/new-recipe/step-6.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'new-recipe/step-7.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/new-recipe/step-7.hbs')
    }),
    new HtmlWebPackPlugin({
      filename: 'new-recipe/step-8.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/new-recipe/step-8.hbs')
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