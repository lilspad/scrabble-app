import React from 'react';
import Board from './board/board.js';
import Bag from './tiles/bag.js';
import Rack from './tiles/rack.js'

const flex = {
    display: "flex",
    columnGap: "10px"
}
class Game extends React.Component {
    render() {
        const scoreStatus = "Currrent score: 0";
        const playerStatus = "Current turn: Player x"
        return (
        <div className="game">
        <div style={flex}>
        <h3 className="status">{scoreStatus}</h3>
        <h3 className="status">{playerStatus}</h3>
        </div>
        <div style={flex}>
        <div className="board"><Board /></div>
        <div classNAme="bag"><Bag /></div>
        </div>
        <div><Rack /></div>
        </div>)
    }
}

export default Game;