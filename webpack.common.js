const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    context: `${__dirname}`,
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    devtool: 'inline-source-map',
    entry: {
        app: `${__dirname}/src/index.js`
    },
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
        publicPath: `${__dirname}`
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, 'app')
        ]
    }
}