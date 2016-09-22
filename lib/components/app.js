const React = require('react'),
      Board = require('./board.js');

function App() {
  return React.createElement(
    'div',
    { id: 'app' },
    React.createElement(Board, null)
  );
}

module.exports = App;