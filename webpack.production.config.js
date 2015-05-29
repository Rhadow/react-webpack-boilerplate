var Webpack = require('webpack'),
    path = require('path'),
    util = require('util'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'dist', 'build'),
    mainPath = path.resolve(__dirname, 'src', 'app.js'),
    cssBundleName = util.format('style.bundle.%s.css', pkg.version),
    jsBundleName = util.format('app.bundle.%s.js', pkg.version);

var config = {
    devtool: 'source-map',
    entry: {
        app: [mainPath],
        vendors: ['react', 'jquery', 'bootstrap']
    },
    output: {
        path: buildPath,
        filename: jsBundleName,
        publicPath: './build/'
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                loader: 'babel',
                exclude: nodeModulesPath
            },
            {
                test: /\.(css|scss)$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap')
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url?limit=8192'
            },
            {
                test : /\.(woff|woff2|ttf|eot)$/,
                loader: 'url'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(cssBundleName, {
            allChunks: true
        }),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
        new Webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: pkg.name,
            filename: '../index.html',
            template: './src/assets/templates/index-template.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    }
};

module.exports = config;
