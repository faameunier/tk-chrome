const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        jquery: 'jquery',
        popup: './src/app/popup.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Tab Killer',
            template:'./src/views/popup.html',
            filename: './views/popup.html'
        }),
        new CopyWebpackPlugin([
            { from: './src/manifest.json', to:'./', flatten:true },
            { from: './src/lib', to:'./lib', flatten:false },
            { from: './src/config', to:'./config', flatten:false }
        ], {
            copyUnmodified: true
        }),
        new CopyWebpackPlugin([
            { from: './src/assets', to:'./assets', flatten:false }
        ], {
            copyUnmodified: false
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                include: path.resolve(__dirname, 'src'),
                use: ['file-loader']
            }
        ]
    },
};
