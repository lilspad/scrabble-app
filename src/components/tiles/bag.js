import React from 'react';
import Tiles from './tile.js'

const bagStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    columnGap: "10px",
    margin: "10px",
    padding: "12px",
    minWidth: "96px",
    maxHeight: "336px"
}

const divStyle = {
    backgroundColor: "#E3EAC8",
    padding: "10px",
    marginTop: "20px",
    textAlign: "center",
    border: "3px solid #5c7551"
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