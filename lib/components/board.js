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
        var newState = this.state.board;
        newState[row][col] = newState[row][col] === 0 ? 1 : 0;
        this.setState({
            board: newState
        });
        console.log("STATE :: ", this.state.board);
    }

    generateCols(row) {
        var cols = [];
        for (var i = 0; i < COLS; i++) {
            cols.push(React.createElement(
                'td',
                { key: i },
                React.createElement(Cell, { handleClick: this.handleClick, active: this.state.board[row][i] !== 0, row: row, col: i })
            ));
        }
        return cols;
    }

    generateRows() {
        var rows = [];
        for (var i = 0; i < ROWS; i++) {
            rows.push(React.createElement(
                'tr',
                { key: i },
                this.generateCols(i)
            ));
        }
        return rows;
    }

    render() {
        return React.createElement(
            'table',
            null,
            React.createElement(
                'tbody',
                null,
                this.generateRows()
            )
        );
    }
}

module.exports = Board;