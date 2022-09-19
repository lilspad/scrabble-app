import React from 'react';
import Board from './board/board.js';
import Bag from './tiles/bag.js';



class Game extends React.Component {
    render() {
        const status = "Currrent score: 0"
        return (
        <div className="game">
        <h3 className="status">{status}</h3>
        <div classNAme="bag"><Bag /></div>
        <div className="board"><Board /></div>
        </div>)
    }
}

export default Game;