const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: `${__dirname}`,
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    entry: {
        app: `${__dirname}/src/index.js`
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'PWA Espaço do Profissional'
        })
    ],
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, '/app/dist'),
        publicPath: `${__dirname}`
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ]
    }
}