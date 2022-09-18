import React from 'react';
import Cell from './cell.js';

const cellTypes={
    0: {
        "display": "",
        color: "#E3EAC8"
    },
    1: {
        "display": "DL",
        color: "#7dbdab"
    },
    2: {
        "display": "TL",
        color: "#997da1"
    },
    3: {
        "display": "DW",
        color: "#c9823e"
    },
    4: {
        "display": "TW",
        color: "#b85039"
    },
    5: {
        "display": "✾",
        color: "#f0dd51"
    }
};


const row1 = [4,0,0,0,1,0,0,4,0,0,1,0,0,0,4];
const row2 = [0,3,0,0,0,2,0,0,0,2,0,0,0,3,0];
const row3 = [0,0,3,0,0,0,1,0,1,0,0,0,3,0,0];
const row4 = [1,0,0,3,0,0,0,1,0,0,0,3,0,0,1];
const row5 = [0,0,0,0,3,0,0,0,0,0,3,0,0,0,0];
const row6 = [0,2,0,0,0,2,0,0,0,2,0,0,0,2,0];
const row7 = [0,0,1,0,0,0,1,0,1,0,0,0,1,0,0];
const row8 = [4,0,0,1,0,0,0,5,0,0,0,1,0,0,4];

const rowPatterns1 = [row1, row2, row3, row4, row5, row6, row7, row8]
const recycledPatterns = [row7, row6, row5, row4, row3, row2, row1]
const boardMatrix = rowPatterns1.concat(recycledPatterns)

class Board extends React.Component {
    createRow(row) {
        
        const boardRow = row.map((num, index) => {
            const display = cellTypes[num].display;
            const color = cellTypes[num].color;
            return (
                <Cell display={display} color={color}/>
            )
        })
        return boardRow;
    }

    createBoard(matrix) {
const boardPattern = matrix.map((pattern, index) => {
            return (
            <tr>{this.createRow(pattern)}</tr>
        )
        })
        return boardPattern;
    }

    render() {
        return (
            <div>
            <table style={{marginLeft: "75px"}}>
            {this.createBoard(boardMatrix)}
            </table>         
            </div>
        )
    }
}

export default Board;