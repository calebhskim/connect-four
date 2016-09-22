const React = require('react'),
      _ = require('lodash'),
      Column = require('./column.js');

const COLS = 7,
      ROWS = 6;

class Board extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      board: _.range(COLS).fill({ state: _.times(ROWS, _.constant(0)), lastPlayed: -1 }),
      player: 1
    };
  }

  handleClick(col, lastPlayedRow) {
    console.log(this.state.board);
    var newState = this.state.board,
        player = this.state.player === 1 ? 2 : 1;

    newState[col].state[lastPlayedRow + 1] = this.state.player;
    newState[col].lastPlayed++;

    this.setState({
      board: newState,
      player: player
    });
  }

  generateCols() {
    var i,
        cols = [];

    for (i = 0; i < COLS; i += 1) {
      cols.push(React.createElement(Column, { key: i, handleClick: this.handleClick, column: i, columnState: this.state.board[i] }));
    }
    return cols;
  }

  render() {
    return React.createElement(
      'table',
      null,
      React.createElement(
        'tbody',
        null,
        this.generateCols()
      )
    );
  }
}

module.exports = Board;