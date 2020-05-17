const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

var common = {
  entry: {
    popup: { import: './src/app/popup.js'},
    background: { import: './src/services/background.js'},
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tabby',
      chunks: ['popup'],
      template: './src/views/popup.html',
      filename: './views/popup.html',
      cache: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Tabby',
      chunks: ['background'],
      template: './src/views/background.html',
      filename: './views/background.html',
      cache: true,
    }),
    new CopyWebpackPlugin([{ from: './src/manifest.json', to: './', flatten: true }], {
      copyUnmodified: true,
    }),
    new CopyWebpackPlugin([{ from: './src/assets', to: './assets', flatten: false }], {
      copyUnmodified: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['file-loader'],
      },
    ],
  },
};

var createConfig = function (env) {
  let config = common;
  if (env == 'dev') {
    common['mode'] = 'development';
    common['devtool'] = 'inline-source-map';
    common.module.rules.push({
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        envName: 'dev',
      },
    });
  } else {
    common['mode'] = 'production';
    common.module.rules.push({
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        envName: 'prod',
      },
    });
  }
  return config;
};

module.exports = (env) => createConfig(env);
