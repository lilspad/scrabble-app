import React from 'react';
import letters from './letters.js'

const divStyle = {
    display: "inline-block",
    textAlign: "centre",
    verticalAlign: "middle",
    lineHeight: "30px",
    margin: "1%",
    color: "white"
}

const tilesStyle = {
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "end",
    alignItems: "center",
    width: "30px",
    height: "30px",
    backgroundColor: "#faecc5",
    border: "solid 5px #faecc5",
    borderRadius: "10px",
    boxShadow: "1px 2px 1px",
    color: "black"
}

const pointsStyle = {
    display: "block",
    alignSelf: "end",
    fontSize: "10px",
    width: "10px",
    height: "10px",
    color: "black"
}



const tileStats = Object.keys(letters).map((key) => {
  return <div style={divStyle}>
            <div style={tilesStyle}>
              {key}
              <div style={pointsStyle}>
                {letters[key].points}
              </div>
            </div> 
            {letters[key].amount}
          </div>
})

function Tiles() {
  return tileStats;
}

export default Tiles;