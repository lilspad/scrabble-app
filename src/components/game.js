import React from 'react';
import Board from './board/board.js';



class Game extends React.Component {
    render() {
        const status = "Currrent score: 0"
        return (
        <div>
        <h3 id="status">{status}</h3>
        <div className="board"><Board /></div>
        </div>)
    }
}

export default Game;