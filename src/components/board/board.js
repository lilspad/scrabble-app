import React from 'react';
import Row from './row.js'

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

    createBoard(matrix) {
        const boardPattern = matrix.map((pattern, index) => {
            return (
            <tr><Row row={pattern}/></tr>
        )
        })
        return boardPattern;
    }

    render() {
        return (
            <div>
            <table style={{
                marginLeft: "50px", 
                borderSpacing: "0px", 
                padding: "1.5px", 
                border: "4.5px solid #c9823e"}}>
            {this.createBoard(boardMatrix)}
            </table>        
            </div>
        )
    }
}

export default Board;