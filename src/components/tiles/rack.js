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

let totalLetters = () => {
    let total = 0;
    Object.keys(letters).map((key) => {
    return total += letters[key].amount;
})
return total;
}

class Rack extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfTiles: 0,
            tilesCleared: false,
            currentTile: "",
            tileDown: true
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
        
        do {
            ran = Math.floor(Math.random() * 27)
            letter = Object.keys(letters)[ran];
            console.log("drawing")
            if (!this.checkStats(letter)) {
                console.log(letter + " out")
            }
        }
        while (!this.checkStats(letter));

        console.log(this.checkStats(letter))

        let key = letter + letters[letter].amount.toString();
        console.log(key);

        this.updateStats(letter);

        return (
            <div className="tileCell rackCell" key={key} onClick={() => this.onSelect(key)}>
                <Tile letter={letter} />
            </div>
        )
        
    }

    updateRack(tiles) {
        if (tiles.length < this.state.numberOfTiles && !this.state.tilesCleared) {
            do {
                tiles.push(this.drawTile());
            }
            while (tiles.length !== this.state.numberOfTiles);

        } else if (tiles.length > this.state.numberOfTiles && !this.state.tilesCleared) {
            let current = this.state.currentTile
            console.log('selected ' + current);
            
            function findTile() {
                for (let i = 0; i < tiles.length; i++) {
                    if (tiles[i].key === current) {
                        return tiles[i];
                    }
                }
            }

            let index = tiles.indexOf(findTile())

            if (index > -1) {
                tiles.splice(index, 1);
            }

        } else if (this.state.tilesCleared) {
            tiles = tiles.splice(0, tiles.length);
        }
    }
    

    render () {

        this.updateRack(this.props.tiles);

        return (
            <div>
            <p>{totalLetters()}</p>
                <h3>Your tiles:</h3>
                <div style={rackStyle}>{this.props.tiles}</div>
                <button className="button" onClick={this.onDraw}>DRAW</button>
                <button className="button" onClick={this.onClear}>CLEAR</button>
            </div>
        )
    }

    onDraw = () => {

        if (totalLetters() === 0) {
            alert('Out of tiles')
            return;
        }

        this.setState({
                tilesCleared: false
            })

        if (this.state.numberOfTiles < 7 && totalLetters() >= 7) {
            this.setState({
                numberOfTiles: 7
            });
        } else if (totalLetters() < 7) {
            this.setState({
                numberOfTiles: totalLetters()
            })
        } else if (this.state.numberOfTiles === 7) {
            alert("Your rack is full.")
        }

    }

    onClear = () => {
        this.setState({
            numberOfTiles: 0,
            tilesCleared: true
        })
    }

    onSelect = (tile) => {
        this.setState({
            numberOfTiles: this.state.numberOfTiles - 1,
            currentTile: tile,
            tileDown: false
        })
    }
}


export default Rack;