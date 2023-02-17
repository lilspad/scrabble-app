import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './components/game.js';
import "./style.css"

document.body.style = 'background: #5c7551; margin: 0';

class App extends React.Component {

    render() {
        return <Game />        
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
