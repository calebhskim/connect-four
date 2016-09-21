'use strict';

const React = require('react'),
      Board = require('./board.js');

class App extends React.Component {
  render() {
    return (
        <div id="app">
            <Board />
        </div>
    )
  }
}

module.exports = App;
