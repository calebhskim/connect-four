'use strict';

const React = require('react'),
      Board = require('./board.js');

class App extends React.Component {
  render() {
    return React.createElement(
      'div',
      { id: 'app' },
      React.createElement(Board, null)
    );
  }
}

module.exports = App;