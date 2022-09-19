import React from 'react';
import Tile from './tile.js';

class Bag extends React.Component {
    render() {
        return (
            <div>
            <h3>Tiles in the bag:</h3>
            <div>
                <Tile />
            </div>
            </div>
        )
    }
}

export default Bag;