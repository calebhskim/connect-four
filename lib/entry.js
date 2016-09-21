'use strict';

const React = require('react'),
      reactDom = require('react-dom');

const App = require('./components/app.js');

reactDom.render(React.createElement(App, null), document.getElementById('app-mount'));