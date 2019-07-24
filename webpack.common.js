const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const commonConfig = {
    context: `${__dirname}`,
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        }]
    },
    devtool: 'inline-source-map',
    entry: {
        'main.bundle.js': `${__dirname}/src/index.js`,
        'main.bundle.css': [
            path.resolve(__dirname, 'app/styles/css/bootstrap/bootstrap.min.css'),
            path.resolve(__dirname, 'appstyles/css/fontawesome-free/css/all.css'),
            path.resolve(__dirname, 'app/styles/main.css')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'app/dist'),
        publicPath: `${__dirname}`
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'app')
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.bundle.css'),
    ]
}

module.exports = commonConfig