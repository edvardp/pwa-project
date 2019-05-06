const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        publicPath: `${__dirname}/app/`,
        contentBase: path.join(__dirname, '/app/dist'),
        // compress: true,
        port: 3000
    }
})