var express = require('express');
var path = require('path');
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', function(req, res) {
    res.sendFile(path.resolve('./index.html'));
});

var port = 3001;

app.listen(port, function(error) {
    if(error) {
        throw error;
    }
    console.log('Server is listening on port ' + port);
});