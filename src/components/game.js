import React from 'react';
import Board from './board/board.js';
import Bag from './tiles/bag.js';
import Rack from './tiles/rack.js';

const display = {
    display: "block"
}

const none = {
    display: "none"
}

let turn = 0;

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            turn: this.props.turn,
            points: this.props.points,
            tiles: this.props.tiles,
            selectedTile: this.props.selectedTile
        }
    }

    isTurn() {
        if (this.state.turn) {
            return (
                <h3>It's {this.state.name}'s turn!</h3>
            )
        } else {
            return (
                <h3>Wait for the other player</h3>
            )
        }
    }

    updatePlayerPage() {
        if (!this.state.turn) {
            return none;
        } else {
            return display;
        }
    }

    render() {

        return (
            <div style={this.updatePlayerPage()}>
                {this.isTurn()}
                <Rack tiles={this.state.tiles} selectedTile={this.state.selectedTile}/>
            </div>
        )

    }
}

class Game extends React.Component {

    checkPlacement() {
        console.log('checking placement of tiles on board')

        let center = document.getElementById('H7');

        if (turn === 0) {
            if (!center.classList.contains('tileOn')) {
                alert('One of the tiles need to be in the center.');
                return;
            }
        }

        let tilesOn = document.getElementsByClassName('tileOn');
        const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

        for (let i = 0; i < tilesOn.length; i ++) {

            let tile = tilesOn[i];

            let tileColumn = tile.id.replace(tile.id[0], '');
            let tileRow = tile.id[0];

            let tileRowIndex = rows.indexOf(tile.id[0]);

            let left = tileColumn - 1;
            let right = Math.floor(tileColumn) + 1;

            let top = rows[tileRowIndex - 1];
            let bottom = rows[tileRowIndex + 1];


            const neighbourId = (row, column) => {
                return row + column;
            }

            let leftNeighbour = document.getElementById(neighbourId(tileRow, left));
            let rightNeighbour = document.getElementById(neighbourId(tileRow, right));
            let topNeighbour = document.getElementById(neighbourId(top, tileColumn));
            let bottomNeighbour = document.getElementById(neighbourId(bottom, tileColumn));



            if (leftNeighbour.classList.contains('tileOn') || rightNeighbour.classList.contains('tileOn')) {
                console.log(tile.id + 'has horizontal neighbours');
            } else if (topNeighbour.classList.contains('tileOn') || bottomNeighbour.classList.contains('tileOn')) {
                console.log(tile.id + ' has vertical neighbours');
            } else {
                alert('Each tile on the board has to be part of a word')
                console.log(tile.id + 'is lonely');
                return;
            }

            

            

            
        }

    }


    render() {

        let player1 = "Player1";
        let player2 = "Player2";

        let player1Turn = true;
        let player2Turn = false;

        let player1Score = 0;
        let player2Score = 0;

        let player1Tiles = [];
        let player2Tiles = [];

        let selectedTile = {
            tileKey: 'none',
            isDown: true
        };

        return (
            <div className="game">
                <div className="div">

                    <Board selectedTile={selectedTile}/>

                    <div className="stats">

                        <h2>Score:</h2>

                        <div className="div score">
                            <h3>{player1}: {player1Score}</h3>
                            <h3>{player2}: {player2Score}</h3>
                        </div>

                        <Bag />

                        <Player 
                            name={player1}
                            turn={player1Turn}
                            points={player1Score}
                            tiles={player1Tiles}
                            selectedTile={selectedTile} 
                        />
                        <Player 
                            name={player2}
                            turn={player2Turn}
                            points={player2Score}
                            tiles={player2Tiles}
                            selectedTile={selectedTile} 
                        />
                        <button className="button" onClick={() => this.checkPlacement()}> PLAY </button>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Game;