var Webpack = require('webpack'),
    path = require('path'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'public', 'build'),
    mainPath = path.resolve(__dirname, 'app', 'app.js');

var config = {
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.js(x)?$/,
                loader: 'babel',
                exclude: nodeModulesPath
            },
            {
                test: /.css$/,
                loaders: ['style', 'css']
            }
        ]
    }
};

module.exports = config;
