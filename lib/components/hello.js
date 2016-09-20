'use strict';

var React = require('react');

class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      'h1',
      null,
      'Hello'
    );
  }
}

module.exports = HelloWorld;