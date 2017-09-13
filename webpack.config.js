var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        path.join(__dirname, 'main.js'),
        path.join(__dirname, '/App/sass/main.scss')
    ],
    output: {
        path: path.join(__dirname, 'static/js'),
        filename: 'compiled.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 3000, 
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-object-rest-spread']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            
            // {
            //     test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
            //     loader: 'file-loader'
            // },
        ]
    },
    plugins: [/*for webpack plugins*/],
    watch: true
};