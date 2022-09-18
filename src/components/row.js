import React from 'react';

class Row extends React.Component {
    createRow(row) {
        
        let boardRow = row.map((num, index) => {
            let display = cellTypes[num].display;
            return (
                <Cell key={index} id="cell${index}" 
                 display={display} type="num"/>
            )
        })
        return boardRow;
    }

    render() {
        return (
            <tr>{this.createRow({row})}</tr>
        )
    }
}