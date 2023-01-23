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

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            turn: this.props.turn,
            points: this.props.points,
            tiles: this.props.tiles
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
                <Rack tiles={this.state.tiles} />
            </div>
        )

    }
}

class Game extends React.Component {


    render() {

        let player1 = "Lily";
        let player2 = "Ali"

        let player1Turn = true;
        let player2Turn = false;

        let player1Score = 0;
        let player2Score = 0;

        let player1Tiles = [];
        let player2Tiles = [];

        return (
            <div className="game">
                <div className="div">

                    <Board />

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
                        />
                        <Player 
                            name={player2}
                            turn={player2Turn}
                            points={player2Score}
                            tiles={player2Tiles} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;