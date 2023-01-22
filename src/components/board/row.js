import React from 'react';
import Cell from './cell.js'

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
        color: "#f0dd51"
    },
    5: {
        "display": "✾",
        color: "#b85039"
    }
};

class Row extends React.Component {
    createRow(row) {
        
        const boardRow = row.map((num, index) => {
            const display = cellTypes[num].display;
            const color = cellTypes[num].color;
            return (
                <Cell display={display} color={color} key={index}/>
            )
        })
        return boardRow;
    }

    render() {
        return (
            <tr className="row">{this.createRow(this.props.row)}</tr>
        )
    }
}

export default Row;