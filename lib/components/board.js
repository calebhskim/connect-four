'use strict';

var React = require('react');

function generateRows() {
    var rows = [];
    for (var i = 0; i < 6; i++) {
        rows.push(React.createElement(
            'tr',
            { key: i },
            React.createElement('td', null),
            React.createElement('td', null),
            React.createElement('td', null),
            React.createElement('td', null),
            React.createElement('td', null),
            React.createElement('td', null),
            React.createElement('td', null)
        ));
    }
    return rows;
}

class Board extends React.Component {
    render() {
        return React.createElement(
            'table',
            null,
            React.createElement(
                'tbody',
                null,
                generateRows()
            )
        );
    }
}

module.exports = Board;