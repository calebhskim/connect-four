const React = require('react'),
      Cell = require('./cell.js');

const ROWS = 6;

class Column extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.columnState.lastPlayed < ROWS - 1) {
            this.props.handleClick(this.props.column, this.props.columnState.lastPlayed);
        }
    }

    generateRows() {
        var cells = [];

        for (var i = 0; i < ROWS; i++) {
            cells.push(React.createElement(Cell, { key: i, player: this.props.columnState.state[i], row: i }));
        }

        return cells;
    }

    render() {
        return React.createElement(
            'tr',
            { onClick: this.handleClick },
            this.generateRows()
        );
    }
}

module.exports = Column;