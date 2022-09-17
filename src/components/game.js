import React from 'react';
import Board from './board.js';



class Game extends React.Component {
    render() {
        const status = "Rendering ok from Game"
        return (
        <div>
        <div id="status">{status}</div>
        <div><Board /></div>
        </div>)
    }
}

export default Game;