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
            board: [],
            player: 1
        };
        for (var i = 0; i < ROWS; i++) {
            this.state.board[i] = _.times(COLS, _.constant(0));
        };
    }

    handleClick(row, col) {
        var newState = this.state.board,
            player = this.state.player === 1 ? 2 : 1;

        newState[row][col] = newState[row][col] === 0 ? this.state.player : 0;
        this.setState({
            board: newState,
            player: player
        });
    }

    generateCols(row) {
        var cols = [];
        for (var i = 0; i < COLS; i++) {
            cols.push(React.createElement(
                'td',
                { key: i },
                React.createElement(Cell, { handleClick: this.handleClick, player: this.state.board[row][i], row: row, col: i })
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