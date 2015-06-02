var Webpack = require('webpack'),
    path = require('path'),
    util = require('util'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    mainPath = path.resolve(__dirname, 'src', 'app.js'),
    buildPath = path.resolve(__dirname, 'dist'),
    htmlTemplatePath = path.resolve(__dirname, 'src', 'assets', 'templates', 'index-template.html'),
    cssBundleName = util.format('style.bundle.%s.css', pkg.version),
    jsBundleName = util.format('js/app.bundle.%s.js', pkg.version);

var config = {
    devtool: 'source-map',
    entry: {
        app: [mainPath],
        vendors: pkg.vendors
    },
    output: {
        path: buildPath,
        filename: jsBundleName
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
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url?limit=8192&name=assets/images/[name].[ext]'
            },
            {
                test : /\.(woff|woff2|ttf|eot|svg)$/,
                loader: 'url?limit=8192&name=assets/fonts/[name].[ext]'
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
        new Webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.bundle.js', Infinity),
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: pkg.name,
            filename: 'index.html',
            template: htmlTemplatePath
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    }
};

module.exports = config;
