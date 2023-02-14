import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './components/game.js';
import "./style.css"

document.body.style = 'background: #5c7551; margin: 0';

class App extends React.Component {
    render() {
        const title = "Wildwood Scrabble";
        return (
            <div>
            <h1>{title}</h1>
            <div><Game /></div>         
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/* To do:

- Fix bug where you click on a cell WITH a tile already on it, AND have a selected tile in hand, the selected tile disappears (needs to be sent back to rack)
- Fix bug where after removing a tile off a cell, that cell no longer accepts tiles
- Define rules for placement: 
    - First word has to touch center
    - All words thereafter have to be attached to another word
- Execute checks on PLAY

*/