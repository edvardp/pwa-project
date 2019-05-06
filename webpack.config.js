const path = require('path')
var webpack = require('webpack')

module.exports = {
    context: `${__dirname}`,
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }],
        // rules: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     use: {
        //         loader: "babel-loader"
        //     }
        // }]
    },
    entry: `${__dirname}/src/index.js`,
    output: {
        filename: 'main.js',
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