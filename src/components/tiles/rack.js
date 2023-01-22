import React from 'react';
import Tile from './tile.js';
import letters from './letters.js'

const rackStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "350px",
    height: "50px",
    backgroundColor: "#b85039",
    border: "3px solid",
    margin: "auto"
}

class Rack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfTiles: 0
        }
    }

    updateStats(letter) {
        return letters[letter].amount -= 1;
    } 

    checkStats(letter) {
        if (letters[letter].amount === 0) {
            return false;
        } else {
            return true;
        }
    }

    drawTile() {
        let ran = Math.floor(Math.random() * 27);
        let letter = Object.keys(letters)[ran];
        
        if (this.checkStats(letter)) {
            console.log(this.checkStats(letter))

        let key = letter + letters[letter].amount.toString();
        console.log(key);

        this.updateStats(letter);

        return (
            <div className="tileCell rackCell" key={key}>
                <Tile letter={letter} />
            </div>
        )
        } else {
            console.log("letter out")
            do {
                ran = Math.floor(Math.random() * 27)
                letter = Object.keys(letters)[ran];
                console.log("checking new letter")
            }
            while (!this.checkStats(letter));

            console.log(this.checkStats(letter))

            let key = letter + letters[letter].amount.toString();
            console.log(key);

            this.updateStats(letter);

            return (
                <div className="tileCell rackCell" key={key}>
                    <Tile letter={letter} />
                </div>
            )
        }
    }

    render () {

        let playerTiles = [];

        for (var i = 0; i < this.state.numberOfTiles; i += 1) {
            playerTiles.push(this.drawTile());
        };

        return (
            <div>
                <h3>Your tiles:</h3>
                <div style={rackStyle}>{playerTiles}</div>
                <button className="button" onClick={this.onDraw}>DRAW</button>
            </div>
        )
    }

    onDraw = () => {

        if (this.state.numberOfTiles < 7 && this.state.numberOfTiles > 0) {
            this.setState({
                numberOfTiles: this.state.numberOfTiles + 1
            });
        } else if (this.state.numberOfTiles === 0) {
            this.setState({
                numberOfTiles: this.state.numberOfTiles + 7
            });
        } else if (this.state.numberOfTiles === 7) {
            alert("You have the maximum amount of tiles on rack.")
        }



    }
}


export default Rack;