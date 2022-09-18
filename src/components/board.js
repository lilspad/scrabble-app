import React from 'react';
import Cell from './cell.js';

/* const boardCells = [
    [4,0,0,1,0,0,0,4,0,0,0,1,0,0,4],
    [0,3,0,0,0,2,0,0,0,2,0,0,0,3,0],
    [0,0,3,0,0,0,1,0,1,0,0,0,3,0,0],
    [1,0,0,3,0,0,0,1,0,0,0,3,0,0,1],
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
]; */

const row1 = [4,0,0,1,0,0,0,4,0,0,0,1,0,0,4];
const row2 = [0,3,0,0,0,2,0,0,0,2,0,0,0,3,0];
const row3 = [0,0,3,0,0,0,1,0,1,0,0,0,3,0,0];
const row4 = [1,0,0,3,0,0,0,1,0,0,0,3,0,0,1];
const row5 = [0,0,0,0,3,0,0,0,0,0,3,0,0,0,0];
const row6 = [0,2,0,0,0,2,0,0,0,2,0,0,0,2,0];
const row7 = [0,0,1,0,0,0,1,0,1,0,0,0,1,0,0];
const row8 = [4,0,0,1,0,0,0,5,0,0,0,1,0,0,4];

const rowPatterns = [row1, row2, row3, row4, row5, row6, row7, row8]

const cellTypes={
    0: {
        "display": "xxx",
        color: "plain"
    },
    1: {
        "display": "DLS",
        color: "sage"
    },
    2: {
        "display": "TLS",
        color: "lilac"
    },
    3: {
        "display": "DWS",
        color: "tange"
    },
    4: {
        "display": "TWS",
        color: "rust"
    },
    5: {
        "display": "*",
        color: "rays"
    }
};

class Board extends React.Component {
    createRow(row) {
        
        let boardRow = row.map((num, index) => {
            let display = cellTypes[num].display;
            return (
                <Cell key={index} id="cell${index}" 
                className="cell" display={display} type="num"/>
            )
        })
        return boardRow;
    }

    createBoard() {

    }

    render() {
        const status = "Rendering ok from Board";
        return (
            <div>
            <table>
            <tr>{this.createRow(row1)}</tr>
            <tr>{this.createRow(row2)}</tr>
            <tr>{this.createRow(row3)}</tr>
            </table>         
            </div>
        )
    }
}

export default Board;