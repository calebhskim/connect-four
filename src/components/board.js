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
      board: _.range(COLS).map(function () {
               return {
                 state: _.times(ROWS, _.constant(0)), 
                 lastPlayed: -1
               }
             }),
      player: 1,
      started: false
    };
  }

  handleClick(col, lastPlayedRow) {
    var newState = this.state.board,
        player = this.state.player === 1 ? 2 : 1;
    
    newState[col].state[lastPlayedRow + 1] = this.state.player;
    newState[col].lastPlayed += 1;
    console.log(newState);
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
