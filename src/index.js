import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './components/game.js';
import './index.css';

class App extends React.Component {
    render() {
        const status = "Rendering ok from App";
        return (
            <div>
            <div id="status">{status}</div>
            <div id="game"><Game /></div>         
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);