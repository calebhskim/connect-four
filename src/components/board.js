const React = require('react'),
      _ = require('lodash'),
      Column = require('./column.js');

const COLS = 7,
      ROWS = 6,
      WIN = 4;

class Board extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      // Initialize the board with objects. At each position hold which player has played the cell
      // and the highest possible sequence of one color at that point.
      board: _.range(COLS).map(function () {
               return {
                 state: _.range(ROWS).map(function () {
                          return new Object({
                            // Return Object for future features
                            player: 0
                          }); 
                        }),
                 lastPlayed: -1
               }
             }),
      player: 1,
      started: false,
      winner: 0
    };
  }
  
  checkHorizontal(player, col, lastPlayedRow) {
    const board = this.state.board;
    var colLeft = col - 1;
    var colRight = col + 1;
    var count = 1;
    var left, right;

    if (colLeft >= 0) {
      left = board[colLeft].state[lastPlayedRow + 1];
    }
    if (colRight < COLS) {
      right = board[colRight].state[lastPlayedRow + 1];
    }

    while (colLeft >= 0 && left.player === player) {
      count += 1;
      colLeft -= 1;
      left = board[colLeft].state[lastPlayedRow + 1];
    }
    while (colRight < COLS && right.player === player) {
      count += 1;
      colRight += 1;
      right = board[colRight].state[lastPlayedRow + 1];
    }
    if (count >= WIN) {
      this.state.winner = player;
    }
  } 

  checkVertical(player, col, lastPlayedRow) {
    const board = this.state.board;
    var count = 1;
    var down;
    if (lastPlayedRow >= 0) {
      down = board[col].state[lastPlayedRow]
    }
    while (lastPlayedRow >= 0 && down.player === player) {
      count += 1;
      lastPlayedRow -= 1;
      down = board[col].state[lastPlayedRow]
    }
    if (count >= WIN) {
      this.state.winner = player;
    }
  } 
  
  checkDownLeft(player, col, lastPlayedRow) {
    const board = this.state.board;
    var count = 1;
    var colLeft = col - 1;
    var rowDown = lastPlayedRow;
    var colRight = col + 1;
    var rowUp = lastPlayedRow + 2;
    var bottomLeft;
    var topRight;

    if (colLeft >= 0 && rowDown >= 0) {
      bottomLeft = board[colLeft].state[rowDown];
    }
    if (colRight < COLS && rowUp < ROWS) {
      topRight = board[colRight].state[rowUp];
    }

    while (colLeft >= 0 && rowDown >= 0 && bottomLeft.player === player) {
      count += 1;
      colLeft -= 1;
      rowDown -= 1;
      bottomLeft = board[colLeft].state[rowDown];
    }
    while (colRight < COLS && rowUp < ROWS && topRight.player === player) {
      count += 1;
      colRight += 1;
      rowUp += 1;
      topRight = board[colRight].state[rowUp];
    }
    if (count >= WIN) {
      this.state.winner = player;
    }
  }

  checkDownRight(player, col, lastPlayedRow) {
    const board = this.state.board;
    var count = 1;
    var colLeft = col - 1;
    var rowUp = lastPlayedRow + 2;
    var colRight = col + 1;
    var rowDown = lastPlayedRow;
    var topLeft;
    var bottomRight;

    if (colLeft >= 0 && rowUp < ROWS) {
      topLeft = board[colLeft].state[rowUp];
    }
    if (colRight < COLS && rowDown >= 0) {
      bottomRight = board[colRight].state[rowDown];
    }

    while (colRight < COLS && rowDown >= 0 && bottomRight.player === player) {
      count += 1;
      colRight += 1;
      rowDown -= 1;
      bottomRight = board[colRight].state[rowDown];
    }
    while (colLeft >= 0 && rowUp < ROWS && topLeft.player === player) {
      count += 1;
      colLeft -= 1;
      rowUp += 1;
      topLeft = board[colLeft].state[rowUp];
    }
    if (count >= WIN) {
      this.state.winner = player;
    }
  }

  checkWin(player, col, lastPlayedRow) {
    if (this.state.winner === 0) {
      this.checkHorizontal(player, col, lastPlayedRow);
      this.checkVertical(player, col, lastPlayedRow);
      this.checkDownLeft(player, col, lastPlayedRow);
      this.checkDownRight(player, col, lastPlayedRow);
    }
  }

  handleClick(col, lastPlayedRow) {
    var newState = this.state.board,
        player = this.state.player === 1 ? 2 : 1;
    
    this.checkWin(this.state.player, col, lastPlayedRow); 
    newState[col].state[lastPlayedRow + 1].player = this.state.player;
    newState[col].lastPlayed += 1;
    this.setState({
      board: newState,
      player: player,
      started: true
    });
  }

  generateCols() {
    var i, cols = [];

    for (i = 0; i < COLS; i += 1) {
      cols.push(
        <Column key={i} handleClick={this.handleClick} column={i} columnState={this.state.board[i]}/>
      );
    }
    return cols;
  }

  render() {
    return (
      <div id="board">
        <div id="start" className={this.state.started ? "started" : "not-started"}>
          <h2>Click any column to start!</h2>
        </div>
        <div id="winner-text" className={this.state.winner === 0 ? "no-win" : "win"}>
          <h2>Player {this.state.winner} won!</h2>
        </div>
        <table>
          <tbody>
            {this.generateCols()}
          </tbody>
        </table>
      </div>
    )
  }
}

module.exports = Board;
