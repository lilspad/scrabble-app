import React from 'react';
import letters from './letters.js'

const tilesStyle = {
  padding: "2px",
  width: "35px",
  height: "20px"
}

const tileStats = Object.keys(letters).map((key) => {
  return <div style={tilesStyle}>{key}: {letters[key].amount}</div>
})

function Tiles() {
  return tileStats;
}

export default Tiles;