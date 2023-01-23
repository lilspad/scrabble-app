import React from 'react';
import letters from './letters.js'

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      letter: this.props.letter,
      points: letters[this.props.letter].points,
      amount: 0
    }
  }

  componentDidMount() {
    this.statsID = setInterval(
        () => this.updateStats(),
        0
      );
  }

  createTile() {
    if (this.state.letter === 'blank') {
      return <div className="tile" ></div>
    } else {
      return (
        <div className="tile">
          {this.state.letter}
          <div className="points">
            {this.state.points}
          </div>
        </div>
      );
    }
  }

  updateStats() {
    this.setState({
      amount: letters[this.state.letter].amount
    })
  }

  render() {

    return (
      <div>
      {this.createTile()}
      <div className="amount">
          {this.state.amount}
      </div>
      </div>
    )
  }
}


export default Tile;


