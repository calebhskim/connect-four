const React = require('react');

var playerClasses = ["", "player1 played", "player2 played"];

class Cell extends React.Component {
  constructor() {
    super();
  }

  render() {
    const player = playerClasses[this.props.player];

    return React.createElement(
      "td",
      { className: this.props.row == 0 ? "bottom" : "" },
      React.createElement("div", { className: `cell ${ player }` })
    );
  }
}

module.exports = Cell;