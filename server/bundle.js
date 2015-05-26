var Webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('../webpack.config.js'),
    path = require('path'),
    fs = require('fs'),
    mainPath = path.resolve(__dirname, '..', 'app', 'app.js');

module.exports = function() {
    var bundleStart = null;
    var compiler = Webpack(webpackConfig);

    compiler.plugin('compile', function() {
        console.log('Bundling...');
        bundleStart = Date.now();
    });

    compiler.plugin('done', function() {
        console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
    });

    var bundler = new WebpackDevServer(compiler, {
        publicPath: '/build/',
        hot: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    bundler.listen(8080, 'localhost', function() {
        console.log('Bundling project, please wait...');
    });
};
