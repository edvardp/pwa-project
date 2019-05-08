const path = require('path')
const webpack = require('webpack')

module.exports = {
    context: `${__dirname}`,
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    entry: `${__dirname}/src/index.js`,
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'app/dist'),
        publicPath: `${__dirname}`
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ]
    },
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'app')
    }
}