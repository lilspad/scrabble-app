import React from 'react';
import Board from './board/board.js';
import Bag from './tiles/bag.js';
import Rack from './tiles/rack.js';

class Game extends React.Component {
    render() {

        const scoreX = 0;
        const scoreY = 0;

        return (
            <div className="game">
                <div className="div">
                    <div className="board"><Board /></div>
                    <div style={{textAlign: "center"}}>
                    
                        <h3>TURN STATUS</h3>
                        <h2>Score:</h2>
                        <div className="div score">
                            <h3>Player X: {scoreX}</h3>
                            <h3>Player Y: {scoreY}</h3>
                        </div>
                        
                        <div className="bag"><Bag /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;