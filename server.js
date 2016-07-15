var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./server/routes');
var favicon = require('serve-favicon');
var path = require('path');
var logger = require('morgan');

mongoose.connect('mongodb://localhost/expressResource', function() {
    console.log('connected to expressResource db.');
});

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./client'));
app.use(favicon(path.join(__dirname, '/client/favicon.ico')));
app.use(logger('dev'));

app.use('/', routes);

app.listen(3800, function() {
    console.log('Listening on port 3800');
});