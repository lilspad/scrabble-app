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

    rowKey() {
        let key = this.props.rowKey;
        switch (key) {
            case 0:
                key = 'A';
                break;
            case 1:
                key = 'B';
                break;
            case 2:
                key = 'C';
                break;
            case 3:
                key = 'D';
                break;
            case 4:
                key = 'E';
                break;
            case 5:
                key = 'F';
                break;
            case 6:
                key = 'G';
                break;
            case 7:
                key = 'H';
                break;
            case 8:
                key = 'I';
                break;
            case 9:
                key = 'J';
                break;
            case 10:
                key = 'K';
                break;
            case 11:
                key = 'L';
                break;
            case 12:
                key = 'M';
                break;
            case 13:
                key = 'N';
                break;
            case 14:
                key = 'O';
                break;
            default:
                key = 'X';
        }
        return key;
    }

    createRow(row) {
        
        const boardRow = row.map((num, index) => {
            const display = cellTypes[num].display;
            const multiplier = cellTypes[num].multiplier;
            const color = cellTypes[num].color;
            const key = this.rowKey() + index;
            return (
                <Cell 
                    display={display}
                    multiplier={multiplier}
                    color={color}
                    cellKey={key}
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