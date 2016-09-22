'use strict';

const React = require('react'),
      Column = require('./column.js'),
      _ = require('lodash');

const COLS = 7,
      ROWS = 6;

class Board extends React.Component {
  constructor() {
       super();
       this.handleClick = this.handleClick.bind(this);
       this.state = {
           board: [],
           player: 1
       };
       for (var i = 0; i < COLS; i++) {
           this.state.board[i] = {
             state: _.times(ROWS, _.constant(0)),
             lastPlayed: -1
           };
       };
  }

  handleClick(col, lastPlayedRow) {
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
      var cols = [];
      for (var i = 0; i < COLS; i++) {
          cols.push(<Column key={i} handleClick={this.handleClick} column={i} columnState={this.state.board[i]}/>);
      }
      return cols;
  }

  render() {
    return (
        <table>
             <tbody>
                 {this.generateCols()}
             </tbody>
         </table>
    )
  }
}

module.exports = Board;
