const React = require('react'),
      Cell = require('./cell.js');

const ROWS = 6;

class Column extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.state = {
      hover: false
    };
  }

  handleClick() {
    const { handleClick, columnState, column, winner } = this.props;
    if (winner === 0 && columnState.lastPlayed < ROWS - 1) {
      handleClick(column, columnState.lastPlayed);
    }
  }
  
  handleHover() {
    const { winner } = this.props;
    const { hover } = this.state;
    var hov = !hover;

    if (winner !== 0) {
      hov = false;
    }

    this.setState({
      hover: hov 
    });
  }

  generateRows() {
    var cells = [];

    for (var i = 0; i < ROWS; i++) {
      cells.push(
        <Cell key={i} player={this.props.columnState.state[i].player} row={i} />
      );
    }

    return cells;
  }

  render() {
    const { hover } = this.state;

    var colStyle = {
      backgroundColor: hover ? '#14AFFA' : 'transparent'
    };

    return (
      <tr style={colStyle} onClick={this.handleClick} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
        {this.generateRows()}
      </tr>
    );
  }
}

module.exports = Column;
