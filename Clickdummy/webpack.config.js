const path = require("path");
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    default: [
      path.resolve(__dirname, './src/JavaScripts/index.js'),
      path.resolve(__dirname, './src/Stylesheets/default.scss')
    ]
  },
  output: {
    filename: "main-[hash].js",
    path: path.resolve(__dirname, "dist/JavaScripts")
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
                url: false
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
      filename: '../index.html',
      template: path.resolve(__dirname, './src/Snippets/04-templates/index.hbs')
    }),
    new MiniCssExtractPlugin({
      filename: '../Stylesheets/[name].css',
      chunkFilename: '[name].css'
    })
  ]
}