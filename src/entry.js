var HelloWorld = require('./components/hello.js');
var React = require('react');
var reactDom = require('react-dom');

reactDom.render(<HelloWorld />, document.getElementById('content'));
