'use strict';

const React = require('react'),
      reactDom = require('react-dom');

// var HelloWorld = require('./components/hello.js');
const App = require('./components/app.js');

reactDom.render(<App />, document.getElementById('app-mount'));
