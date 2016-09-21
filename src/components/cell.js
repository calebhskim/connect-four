'use strict';

const React = require('react');

class Cell extends React.Component {
  constructor() {
      super();
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
      this.props.handleClick(this.props.row, this.props.col);
  }

  render() {
    return (
        <div onClick={this.onClick} className="cell">
        </div>
    )
  }
}

module.exports = Cell;
