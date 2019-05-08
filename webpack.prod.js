const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: false,
            title: 'PWA Espaço do Profissional',
            template: 'app/templates/index.html',
            filename: '../index.html',
            bundlepath: './dist/main.bundle.js',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: 'main.bundle.js.map'
        })
    ],
})