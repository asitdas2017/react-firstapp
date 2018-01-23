var path = require('path');

module.exports = {
    entry: './src/app/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}