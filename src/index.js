import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './components/game.js';
import "./style.css"

//document.body.style = 'background: #ffdfab';
class App extends React.Component {
    render() {
        const title = "Scrabble time!";
        return (
            <div>
            <h2 className="status">{title}</h2>
            <div className="game"><Game /></div>         
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);