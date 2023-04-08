const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const env = require('./scripts/env');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const developmentTsOptions =
  process.env.NODE_ENV === 'development'
    ? {
        compilerOptions: {
          noImplicitAny: false,
        },
      }
    : {};

var options = {
  entry: {
    app: './src/index.tsx',
    content: './src/content.tsx',
    background: './src/background.ts',
  },
  output: {
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          ...developmentTsOptions,
        },
      },
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {
          ...developmentTsOptions,
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      chunks: ['app'],
    }),
    // new HtmlWebPackPlugin({
    //   template: "./public/background.html",
    //   filename: "./background.html",
    //   chunks: ["background"],
    // }),
    // new HtmlWebPackPlugin({
    //   template: "./public/content.html",
    //   filename: "./content.html",
    //   chunks: ["content"],
    // }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, "src", "popup.html"),
    //   filename: "popup.html",
    //   chunks: ["popup"],
    // }),
    new CopyPlugin({
      patterns: [{ from: './public/manifest.json', to: 'manifest.json' }],
    }),
    new WriteFilePlugin(),
  ],
};

if (env.NODE_ENV === 'development') {
  options.devtool = 'cheap-module-source-map';
  options.mode = 'development';
}

module.exports = options;
