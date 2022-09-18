import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './components/game.js';
import "./style.css"

class App extends React.Component {
    render() {
        const title = "Scrabble time!";
        return (
            <div>
            <h2 id="status">{title}</h2>
            <div id="game"><Game /></div>         
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);