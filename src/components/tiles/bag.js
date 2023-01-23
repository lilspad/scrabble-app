import React from 'react';
import Tile from './tile.js'
import letters from './letters.js';

const bagStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
}

const divStyle = {
    textAlign: "center",
    width: "60%",
    margin: "auto"
}

class Bag extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    createTiles() {
        return (
            <div style={bagStyle}>
                {Object.keys(letters).map((key) => {
                    return (
                        <div className="tileCell bagCell"  key={key}>
                            <Tile letter={key}/>
                        </div>)
                })}
            </div>
        )
    }

    totalLetters() {
        function setTotal() {
            let total = 0;
            Object.keys(letters).map((key) => {
                return total += letters[key].amount;
            });
            return total;
        }

        this.setState({
            total: setTotal()
    })
    }

    componentDidMount() {
        this.totalID = setInterval(
            () => this.totalLetters(),
            0
        );
    }

    render() {

        return (
            <div style={divStyle}>
            <h3>Tiles in the bag: </h3>
                {this.createTiles()}
                <div>Total: {this.state.total}</div>
            </div>
        )
    }
}


export default Bag;