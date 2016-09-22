'use strict';

const React = require('react');

var playerClasses = ["", "player1 played", "player2 played"];

class Cell extends React.Component {
  constructor() {
      super();
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
      this.props.handleClick();
  }

  render() {
    const player = playerClasses[this.props.player];
    
    return (
        <td>
            <div onClick={this.onClick} className={`cell ${player}`}></div>
        </td>
    )
  }
}

module.exports = Cell;
