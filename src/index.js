import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './components/game.js';
import "./style.css"

document.body.style = 'background: #5c7551';

class App extends React.Component {
    render() {
        const title = "Scrabble";
        return (
            <div>
            <h1 className="status">{title}</h1>
            <div><Game /></div>         
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);