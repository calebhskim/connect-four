const React = require('react');

var playerClasses = ["", "player1 played", "player2 played"];

class Cell extends React.Component {
  constructor() {
    super();
  }

  render() {
    const player = playerClasses[this.props.player];
    
    return (
      <td className={this.props.row == 0 ? "bottom" : ""}>
        <div className={`cell ${player}`}>
        </div>
      </td>
    )
  }
}

module.exports = Cell;
