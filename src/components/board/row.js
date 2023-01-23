import React from 'react';
import Cell from './cell.js'

const cellTypes={
    0: {
        "display": "",
        color: "#d9e3b1"
    },
    1: {
        "display": "DL",
        multiplier: 2,
        color: "#7dbdab"
    },
    2: {
        "display": "TL",
        multiplier: 3,
        color: "#997da1"    
    },
    3: {
        "display": "DW",
        multiplier: 2,
        color: "#c9823e"
    },
    4: {
        "display": "TW",
        multiplier: 3,
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
            const multiplier = cellTypes[num].multiplier;
            const color = cellTypes[num].color;
            return (
                <Cell 
                    display={display}
                    multiplier={multiplier}
                    color={color}
                    key={index}
                    selectedTile={this.props.selectedTile}
                />
            )
        })
        return boardRow;
    }

    render() {
        return (
            <tr className="row" style={{
                display: "flex", 
                lineHeight: "40px",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {this.createRow(this.props.row)}
            </tr>
        )
    }
}

export default Row;