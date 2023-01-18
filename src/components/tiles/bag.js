import React from 'react';
import Tiles from './tile.js'

const bagStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "center"
}

const divStyle = {
    backgroundColor: "#5c7551",
    textAlign: "center",
    width: "60%",
    margin: "auto"

}
class Bag extends React.Component {
    

    render() {
        return (
            <div style={divStyle}>
            <h3>Tiles in the bag:</h3>
            <div style={bagStyle}>
                <Tiles />
            </div>
            </div>
        )
    }
}

export default Bag;