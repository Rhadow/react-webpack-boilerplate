var express = require('express'),
    path = require('path'),
    httpProxy = require('http-proxy');

var app = express(),
    proxy = httpProxy.createProxyServer();

var isProduction = process.env.NODE_ENV === 'production',
    port = isProduction ? 8080 : 3000,
    publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

if(!isProduction) {
    var bundle = require('./server/bundle.js');
    bundle();

    app.all('/build/*', function(req, res) {
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });
}

proxy.on('error', function(e) {
    console.log('Could not connect to proxy, please try again...');
})

app.listen(port, function() {
    console.log('Server running on port: ' + port);
})
