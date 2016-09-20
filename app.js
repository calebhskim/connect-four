'use strict';

const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser');

var app = express();
console.log('PATH :: ', path.join(__dirname, 'lib'));
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
