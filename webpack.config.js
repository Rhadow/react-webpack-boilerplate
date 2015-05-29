var Webpack = require('webpack'),
    path = require('path'),
    util = require('util'),
    pkg = require('./package.json'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var eslintrcPath = path.resolve(__dirname, '.eslintrc'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'public', 'build'),
    mainPath = path.resolve(__dirname, 'src', 'app.js'),
    jsBundleName = util.format('app.bundle.%s.js', pkg.version);

var config = {
    devtool: 'eval',
    watch: true,
    entry: {
        app: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080',
            mainPath
        ],
        vendors: ['react', 'jquery', 'bootstrap']
    },
    output: {
        path: buildPath,
        filename: jsBundleName,
        publicPath: '/build/'
    },
    module: {
        preLoaders: [
            {
                test: /\.js(x)?$/,
                loader: 'eslint',
                exclude: nodeModulesPath
            }
        ],
        loaders: [
            {
                test: /\.js(x)?$/,
                loader: 'babel',
                exclude: nodeModulesPath
            },
            {
                test: /\.(css|scss)$/,
                loaders: ['style', 'css', 'sass']
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
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery'
        }),
        new Webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
        new Webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            title: pkg.name,
            filename: 'index.html',
            template: './src/assets/templates/index-template.html'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    eslint: {
        configFile: eslintrcPath
    }
};

module.exports = config;
