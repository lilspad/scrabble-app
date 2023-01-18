import React from 'react';
import Board from './board/board.js';
import Bag from './tiles/bag.js';
import Rack from './tiles/rack.js'

class Game extends React.Component {
    render() {
        const scoreStatus = "Currrent score: 0";
        const playerStatus = "Current turn: Player x"
        return (
        <div className="game">
        <div className="div">
        <div className="board"><Board /></div>
        <div style={{textAlign: "center"}}>
            <div className="bag"><Bag /></div>
            <h3>{scoreStatus}</h3> <br></br>
            <h3>{playerStatus}</h3>
        </div>
        </div>
        <div><Rack /></div>
        </div>)
    }
}

export default Game;