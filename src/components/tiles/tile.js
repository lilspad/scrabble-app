import React from 'react';
import letters from './letters.js'

class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      letter: this.props.letter,
      points: 0,
      amount: null
    }
  }

  componentDidMount() {
    this.statsID = setInterval(
        () => this.updateStats(),
        10
      );
  }

  createTile() {
    return (
      <div className="tile">
        {this.state.letter}
        <div className="points">
          {this.state.points}
        </div>
      </div>
    );
  }

  updateStats() {
    this.setState({
      points: letters[this.state.letter].points,
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


