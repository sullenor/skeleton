'use strict';

var config = require('../package').config || {};
var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || config.port;

require('babel/register');
require('css-modules-require-hook')({root: path.join(__dirname, '../')});
require('./configure')(app);
require('./routes')(app);

app.listen(port, function () {
  console.log('listening %s', port);
});
