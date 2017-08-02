import React, { Component } from 'react';
import _ from 'lodash';

import Column from './Column';

const COLS = 7,
      ROWS = 6,
      WIN = 4;

class Board extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      // Initialize the board with objects. At each position hold which player has played the cell
      // and the highest possible sequence of one color at that point.
      board: _.range(COLS).map(function () {
        return {
          state: _.range(ROWS).map(function () {
            return {
              // Return Object for future features
              player: 0
            }; 
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
    const { board } = this.state;
    var colLeft = col - 1;
    var colRight = col + 1;
    var count = 1;

    while (colLeft >= 0 && board[colLeft].state[lastPlayedRow + 1].player === player) {
      count += 1;
      colLeft -= 1;
    }
    while (colRight < COLS && board[colRight].state[lastPlayedRow + 1].player === player) {
      count += 1;
      colRight += 1;
    }
    if (count >= WIN) {
      this.setState({
        winner: player
      });
    }
  } 

  checkVertical(player, col, lastPlayedRow) {
    const board = this.state.board;
    var count = 1;

    while (lastPlayedRow >= 0 && board[col].state[lastPlayedRow].player === player) {
      count += 1;
      lastPlayedRow -= 1;
    }
    if (count >= WIN) {
      this.setState({
        winner: player
      });
    }
  } 
  
  checkDownLeft(player, col, lastPlayedRow) {
    const board = this.state.board;
    var count = 1;
    var colLeft = col - 1;
    var rowDown = lastPlayedRow;
    var colRight = col + 1;
    var rowUp = lastPlayedRow + 2;

    while (colLeft >= 0 && rowDown >= 0 && board[colLeft].state[rowDown].player === player) {
      count += 1;
      colLeft -= 1;
      rowDown -= 1;
    }
    while (colRight < COLS && rowUp < ROWS && board[colRight].state[rowUp].player === player) {
      count += 1;
      colRight += 1;
      rowUp += 1;
    }
    if (count >= WIN) {
      this.setState({
        winner: player
      });
    }
  }

  checkDownRight(player, col, lastPlayedRow) {
    const board = this.state.board;
    var count = 1;
    var colLeft = col - 1;
    var rowUp = lastPlayedRow + 2;
    var colRight = col + 1;
    var rowDown = lastPlayedRow;

    while (colRight < COLS && rowDown >= 0 && board[colRight].state[rowDown].player === player) {
      count += 1;
      colRight += 1;
      rowDown -= 1;
    }
    while (colLeft >= 0 && rowUp < ROWS && board[colLeft].state[rowUp].player === player) {
      count += 1;
      colLeft -= 1;
      rowUp += 1;
    }
    if (count >= WIN) {
      this.setState({
        winner: player
      });
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
    const { board, player }  = this.state;
    const newPlayer = player === 1 ? 2 : 1;
    var newState = board;
    
    this.checkWin(player, col, lastPlayedRow); 
    newState[col].state[lastPlayedRow + 1].player = player;
    newState[col].lastPlayed += 1;
    this.setState({
      board: newState,
      player: newPlayer,
      started: true
    });
  }

  generateCols() {
    const { board, winner } = this.state;
    var i, cols = [];

    for (i = 0; i < COLS; i += 1) {
      cols.push(
        <Column winner={winner} key={i} handleClick={this.handleClick} column={i} columnState={board[i]}/>
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

export default Board;
