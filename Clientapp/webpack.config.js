var path = require('path');

module.exports = {
    entry: {
        routes: './index.js',
    },
    output: {
        filename: './[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
        ],
    },
    resolve: {
        // Allow require('./blah') to require blah.jsx
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
};