import React, { Component } from 'react';

var playerClasses = ["", "player1 played", "player2 played"];

class Cell extends Component {
  render() {
    const player = playerClasses[this.props.player];
    
    return (
      <td className={this.props.row === 0 ? "bottom" : ""}>
        <div className={`cell ${player}`}>
        </div>
      </td>
    )
  }
}

export default Cell;
