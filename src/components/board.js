import React from 'react';
import Cell from './cell.js';

const cellTypes={
    0: {
        "display": "---",
        color: "plain"
    },
    1: {
        "display": "oo",
        color: "sage"
    },
    2: {
        "display": "fff",
        color: "lilac"
    },
    3: {
        "display": "??",
        color: "tange"
    },
    4: {
        "display": "!!!",
        color: "rust"
    },
    5: {
        "display": "**",
        color: "rays"
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

const rowPatterns = [row1, row2, row3, row4, row5, row6, row7, row8]

class Board extends React.Component {
    createRow(row) {
        
        let boardRow = row.map((num, index) => {
            let display = cellTypes[num].display;
            return (
                <Cell key={index} className="cell" 
                display={display} type="num"/>
            )
        })
        return boardRow;
    }

    createBoard(pattern) {
        let rowPattern = pattern.map((arr, index) => {
            return (
            <tr>{this.createRow(arr)}</tr>
        )
        })
        return rowPattern;
    }

    render() {
        return (
            <div>
            <table>
            {this.createBoard(rowPatterns)}
            </table>         
            </div>
        )
    }
}

export default Board;