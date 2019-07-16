const {resolve} = require('path');

module.exports = {
    entry: {
        bundle: './js/scripts.js',
        polyfill: '@babel/polyfill',
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}