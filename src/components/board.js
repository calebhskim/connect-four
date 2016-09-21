'use strict';

const React = require('react'),
      Cell = require('./cell.js'),
      _ = require('lodash');

const ROWS = 6,
      COLS = 7;

class Board extends React.Component {
  constructor() {
       super();
       this.handleClick = this.handleClick.bind(this);
       this.state = {
           board: []
       };
       for (var i = 0; i < ROWS; i++) {
           this.state.board[i] = _.times(COLS, _.constant(0));
       };
  }

  handleClick(row, col) {
    console.log("STATE :: ", this.state);
    console.log("ROW :: COL", row, col);
  }

  generateCols(row) {
      var cols = [];
      for (var i = 0; i < COLS; i++) {
          cols.push(
              <td key={i}>
                  <Cell handleClick={this.handleClick} active={false} row={row} col={i} />
              </td>
          );
      }
      return cols;
  }

  generateRows() {
      var rows = [];
      for (var i = 0; i < ROWS; i++) {
          rows.push(
                  <tr key={i}>
                      {this.generateCols(i)}
                  </tr>
                  );
      }
      return rows;
  }

  render() {
    return (
        <table>
             <tbody>
                 {this.generateRows()}
             </tbody>
         </table>
    )
  }
}

module.exports = Board;
