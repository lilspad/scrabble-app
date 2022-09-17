import React from 'react';
import createBoard from './board.js';



class Game extends React.Component {
    render() {
        const status = "Rendering ok from Game"
        return (
        <div>
        <div id="status">{status}</div>
        {createBoard()}
        </div>)
    }
}

export default Game;