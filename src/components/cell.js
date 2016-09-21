'use strict';

const React = require('react');

var playerClasses = ["", "player1 played", "player2 played"];

class Cell extends React.Component {
  constructor() {
      super();
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
      if (!this.props.played) {
          this.props.handleClick(this.props.row, this.props.col);
      }
  }

  render() {
    const player = playerClasses[this.props.player];
    
    return (
        <div onClick={this.onClick} className={`cell ${player}`}>
        </div>
    )
  }
}

module.exports = Cell;
