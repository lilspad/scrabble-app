import React from 'react';
import Tile from './tile.js'
import letters from './letters.js';

const bagStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
}

const divStyle = {
    textAlign: "center",
    width: "60%",
    margin: "auto"
}



class Bag extends React.Component {

    createTiles() {
        return (
            <div style={bagStyle}>
                {Object.keys(letters).map((key) => {
                    return (
                        <div className="tileCell bagCell"  key={key}>
                            <Tile letter={key}/>
                        </div>)
                })}
            </div>
        )
    }

    render() {

        return (
            <div style={divStyle}>
            <h3>Tiles in the bag:</h3>
                {this.createTiles()}
                <div>Total: </div>
            </div>
        )
    }
}


export default Bag;