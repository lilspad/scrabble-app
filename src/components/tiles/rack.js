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

let swapStyle = {
    backgroundColor: 'gray'
};

let totalLetters = () => {
    let total = 0;
    Object.keys(letters).map((key) => {
    return total += letters[key].amount;
})
return total;
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

class Rack extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfTiles: 0,
            awaitingTile: false,
            tilesClearing: false,
            clearedOnce: false,
            
        }
    }


    updateStats(letter) {
        if (this.state.tilesClearing) {
            return letters[letter].amount += 1;
        } else {
            return letters[letter].amount -= 1;
        }
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

        if (letter === 'blank') {
            let key = letter + letters[letter].amount.toString();
            console.log(key);

            this.updateStats(letter);

            return (

                <div className="tileCell rackCell"
                    key={key} 
                    onClick={() => {
                        this.onSelect(key);
                        wait(500).then(() => {
                            key = this.blank();
                            console.log("blank ready");
                            this.props.selectedTile.tileKey = key;
                            console.log('tile is ' + this.props.selectedTile.tileKey)
                        });
                        console.log('waiting for blank')
                    }}
                    >
                    <Tile letter={letter}/>
                </div>
            )
        }

        let key = letter + letters[letter].points + ':' + letters[letter].amount.toString();
        console.log(key);

        this.updateStats(letter);

        return (
            <div className="tileCell rackCell"
                key={key}
                onClick={() => this.onSelect(key)}
                >
                <Tile letter={letter} />
            </div>
        )
        
    }

    updateRack(tiles) {
        console.log('updating rack...')

        if (tiles.length < this.state.numberOfTiles && !this.state.tilesClearing && !this.state.awaitingTile) {
            do {
                tiles.push(this.drawTile());
            }
            while (tiles.length !== this.state.numberOfTiles);
            
            if (!this.state.clearedOnce && tiles.length === 7) {
                swapStyle = {};
            }

        } else if (tiles.length >= this.state.numberOfTiles && tiles.length > 1 && !this.state.tilesClearing && !this.state.awaitingTile) {
            console.log('selected: ')

            let current = this.props.selectedTile.tileKey
            console.log(current)

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

        } else if (this.state.awaitingTile) {
            console.log('returning: ')

            let current = this.props.selectedTile.tileKey
            console.log(current)

            const tile = (
                <div className="tileCell rackCell"
                key={current}
                onClick={() => this.onSelect(current)}
                >
                <Tile letter={this.props.selectedTile.tileKey[0]} />
                </div>
            )

            tiles.push(tile);
            console.log('ready');

        } else if (this.state.tilesClearing) {
            console.log('clearing...');

            tiles.map((tile) => {
                let tileKey = tile.key[0];
                
                return this.updateStats(tileKey);
            })

            tiles = tiles.splice(0, tiles.length);

            console.log('ready');

            swapStyle = {
                backgroundColor: 'gray'
            }
        }
    }
    

    render () {

        this.updateRack(this.props.tiles);

        return (
            <div>

                <h3>Your tiles:</h3>

                <div style={rackStyle} onClick={this.onReturn}>{this.props.tiles}</div>
                <p>Selected tile: {this.props.selectedTile.tileKey[0]}</p>

                <button 
                    className="button" 
                    onClick={this.onDraw}
                >
                    DRAW
                </button>

                <button 
                    className="button" 
                    onClick={() => {
                        if (this.state.numberOfTiles === 7 && !this.state.clearedOnce) {
                            this.onClear()
                        } else if (this.state.clearedOnce) {
                            return;
                        } else {
                            alert('Cannot swap right now - you can only swap if you have not made any moves this turn and your rack is full.')
                        }
                    }} 
                    style={swapStyle}
                >
                    SWAP
                </button>

            </div>
        )
    }

    onDraw = () => {

        if (totalLetters() === 0) {
            alert('Out of tiles')
            return;
        }

        this.setState({
            awaitingTile: false,
            tilesClearing: false
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
            alert("Your rack is full")
        }

    }

    onClear = () => {

        let confirm = window.confirm('Are you sure you want to swap? This will clear your rack and you will have to draw a new set. You can only do this once per game!')

        if (confirm) {
            console.log('clearing...')
            this.setState({
                numberOfTiles: 0,
                tilesClearing: true,
                clearedOnce: true
            })
        } else {
            return;
        }
    }

    blank = () => {
        let newLetter = window.prompt('Enter letter: ', '')
        console.log('input: ' + newLetter)

        return newLetter;
    }

    onSelect = (tile) => {

        if (!this.props.selectedTile.isDown && !this.state.awaitingTile) {
            console.log('awaiting current')
            this.setState({
                awaitingTile: true
            })
            return;
        } else if (tile === 'blank1' || tile === 'blank2') {
            wait(1000).then(() => {
                console.log('updating current')
                tile = this.props.selectedTile.tileKey
                console.log('ready')
                return;
            })
            console.log('waiting...')
        }

        this.setState({
            numberOfTiles: this.state.numberOfTiles - 1,
            awaitingTile: false
        })

        this.props.selectedTile.tileKey = tile;
        this.props.selectedTile.isDown = false;
    }
}


export default Rack;