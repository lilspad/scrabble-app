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

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            turn: 0,
            playerName1: 'Player1',
            playerName2: 'Player2',
            playerTurn: '1',
            selectedTile: {
                tileKey: 'none',
                isDown: true
            }
        }
        this.onInputchange = this.onInputchange.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    checkPlacement() {
        console.log('checking placement of tiles on board')

        let center = document.getElementById('H7');

        if (this.state.turn === 0) {
            if (!center.classList.contains('tileOn')) {
                alert('One of the tiles need to be in the center.');
                return false;
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
                return true;
            } else if (topNeighbour.classList.contains('tileOn') || bottomNeighbour.classList.contains('tileOn')) {
                console.log(tile.id + ' has vertical neighbours');
                return true;
            } else {
                alert('Each tile on the board has to be part of a word')
                console.log(tile.id + 'is lonely');
                return false;
            }
            
        }

    }

    render() {

        let player1Score = 0;
        let player2Score = 0;

        let player1Tiles = [];
        let player2Tiles = [];

        return (
            <div className="game">
                <h1>Wildwood Scrabble</h1>
                <div id="start" style={none}>
                    <label htmlFor="playerName1">Player 1:</label>
                    <input type='text' name="playerName1" value={this.state.playerName1} onChange={this.onInputchange}/>
                    <label htmlFor="playerName2">Player 2:</label>
                    <input type='text' name="playerName2" value={this.state.playerName2} onChange={this.onInputchange}/>
                    <button className="button" onClick={this.start} >START</button>
                </div>
                <div id="game" /*style={none}*/>

                    <Board selectedTile={this.state.selectedTile}/>

                    <div className="stats">

                        <h2>Score:</h2>

                        <div className="div score">
                            <h3>{this.state.playerName1}: {player1Score}</h3>
                            <h3>{this.state.playerName2}: {player2Score}</h3>
                        </div>

                        <Bag />
                        <div id="player1" style={display}>
                            <Player 
                                name={this.state.playerName1}
                                playerID='1'
                                turn={this.state.playerTurn}
                                points={player1Score}
                                tiles={player1Tiles}
                                selectedTile={this.state.selectedTile}
                            />
                        </div>
                        <div id="player2" style={none} >
                            <Player 
                                name={this.state.playerName2}
                                playerID='2'
                                turn={this.state.playerTurn}
                                points={player2Score}
                                tiles={player2Tiles}
                                selectedTile={this.state.selectedTile} 
                            />
                        </div>
                        <button className="button" onClick={this.play}> PLAY </button>
                    </div>  
                </div>
            </div>
        );
    }

    start = () => {

        let test = true;

        if (/*this.state.playerName1 && this.state.playerName2*/ test) {
            document.getElementById('start').style.display = 'none';
            document.getElementById('game').style.display = 'flex';
        } else {
            alert('Please enter player names.')
        }
        
    }

    play = () => {

        if (!this.checkPlacement()) {
            return;
        }

        const changeTurn = () => {
            if (this.state.playerTurn === '1') {
                return '2';
            } else {
                return '1';
            }
        }

        this.setState({
            turn: this.state.turn + 1,
            playerTurn: changeTurn()
        })
        
        const changePlayer = () => {
            if (this.state.playerTurn === '1') {
                document.getElementById('player1').style = display;
                document.getElementById('player2').style = none;
            } else if (this.state.playerTurn === '2') {
                document.getElementById('player2').style = display;
                document.getElementById('player1').style = none;
            }
        }

        changePlayer();
    }
    
}

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: this.props.tiles,
            selectedTile: this.props.selectedTile
        }
    }

    render() {

        return (
            <div>
                <h3>{this.props.name}'s tiles: </h3>
                <Rack tiles={this.state.tiles} selectedTile={this.state.selectedTile}/>
            </div>
        )

    }
}

export default Game;