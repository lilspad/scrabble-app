import React from 'react';
import Cell from './cell.js'
import cellTypes from './cellTypes.js'

const boardCells = [
    [4,0,0,1,0,0,0,4,0,0,0,1,0,0,4],
    [0,3,0,0,0,2,0,0,0,2,0,0,0,3,0],
    [1,0,0,3,0,0,0,1,0,0,0,3,0,0,1],
    [0,0,3,0,0,0,1,0,1,0,0,0,3,0,0],
    [0,0,0,0,3,0,0,0,0,0,3,0,0,0,0],
    [0,2,0,0,0,2,0,0,0,2,0,0,0,2,0],
    [0,0,1,0,0,0,1,0,1,0,0,0,1,0,0],
    [4,0,0,1,0,0,0,5,0,0,0,1,0,0,4],
    [0,0,1,0,0,0,1,0,1,0,0,0,1,0,0],
    [0,2,0,0,0,2,0,0,0,2,0,0,0,2,0],
    [0,0,0,0,3,0,0,0,0,0,3,0,0,0,0],
    [1,0,0,3,0,0,0,1,0,0,0,3,0,0,1],
    [0,0,3,0,0,0,1,0,1,0,0,0,3,0,0],
    [0,3,0,0,0,2,0,0,0,2,0,0,0,3,0],
    [4,0,0,1,0,0,0,4,0,0,0,1,0,0,4]
];

class Board extends React.Component {
    renderCell() {
        return <Cell />
    }

    renderTypes() {
        return {cellTypes, boardCells}
    }

    /*createBoard() {
        return (
            boardCells.map(row => 
            row.map(col => 
            Cell(cellTypes[col])))
        )
    }*/

    render() {
        const status = "Rendering ok from Board";
        return (
            <div>
            <div id="status">{status}</div>
            {this.renderCell()}
            </div>
        )
    }
}

export default Board;