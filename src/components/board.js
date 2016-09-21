'use strict';
var React = require('react');

function generateRows() {
    var rows = [];
    for (var i = 0; i < 6; i++) {
        rows.push(
                <tr key={i}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>        
                    <td></td>
                </tr>
                );
    }
    return rows;
}

class Board extends React.Component {
  render() {
    return (
        <table>
            <tbody>
                {generateRows()}
            </tbody>
        </table>
    )
  }
}

module.exports = Board;
