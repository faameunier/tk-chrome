const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

var common = {
  entry: {
    popup: { import: './src/app/popup.js' },
    background: { import: './src/services/background.js' },
    onboarding: { import: './src/app/onboarding.js' },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    usedExports: true,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: '../bundle_size_analysis.html',
      openAnalyzer: false,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'tabby',
      chunks: ['popup'],
      template: './src/views/popup.html',
      filename: './views/popup.html',
      cache: true,
    }),
    new HtmlWebpackPlugin({
      title: 'tabby',
      chunks: ['background'],
      template: './src/views/background.html',
      filename: './views/background.html',
      cache: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Tabby',
      chunks: ['onboarding'],
      template: './src/views/onboarding.html',
      filename: './views/onboarding.html',
      cache: true,
    }),
    new CopyWebpackPlugin([{ from: './src/manifest.json', to: './', flatten: true }], {
      copyUnmodified: true,
    }),
    new CopyWebpackPlugin([{ from: './src/_locales', to: './_locales', flatten: false }], {
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
    common['plugins'].push(
      new webpack.DefinePlugin({
        ENV: JSON.stringify('dev'),
      })
    );
    common.module.rules.push({
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        envName: 'dev',
        plugins: ['lodash'],
      },
    });
  } else if (env == 'debug' || env == 'test') {
    common['mode'] = 'development';
    common['devtool'] = 'inline-source-map';
    common['plugins'].push(
      new webpack.DefinePlugin({
        ENV: JSON.stringify('debug'),
      })
    );
    common.module.rules.push({
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        envName: 'dev',
        plugins: ['lodash'],
      },
    });
  } else {
    common['mode'] = 'production';
    common['plugins'].push(
      new webpack.DefinePlugin({
        ENV: JSON.stringify('prod'),
      })
    );
    common.module.rules.push({
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        envName: 'prod',
        plugins: ['lodash'],
      },
    });
  }
  return config;
};

module.exports = (env) => createConfig(env);
