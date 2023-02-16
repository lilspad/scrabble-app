import React from "react";

let className = "tile";
class Cell extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: this.props.display,
            secondary: this.props.secondary,
            multiplier: this.props.multiplier,
            style: {
                width: "40px",
                height: "40px",
                textAlign: "center",
                verticalAlign: "middle",
                border: "black solid 1px",
                backgroundColor: this.props.color,
                boxShadow: "0 0 0"
            },
            selectedTile: this.props.selectedTile,
            tileOn: false
        }
    }

    render() {
        return (
            <td 
                className={className} 
                id={this.props.cellKey}
                style={this.state.style}
                onMouseOver={() => {this.onIn()}} 
                onMouseOut={() => {this.onOut()}} 
                onClick={() => {this.onClick()}}
            >
                {this.state.display}
                <div className="points">{this.state.secondary}</div>
            </td>
        )
    }

    onIn = () => {

        if (this.state.selectedTile.isDown || this.state.tileOn) {
            return;
        } 

        this.setState({
            display: this.state.selectedTile.tileKey[0],
            secondary: this.state.selectedTile.tileKey[1],
            style: {
                border: "black solid 1px",
                minWidth: "40px",
                height: "40px",
                zIndex: "5"
            }
        })

    }

    onOut = () => {

        if (this.state.selectedTile.isDown || this.state.tileOn) {
            return;
        }

        this.setState({
            display: this.props.display,
            secondary: this.props.secondary,
            style: {
                minWidth: "40px",
                height: "40px",
                textAlign: "center",
                verticalAlign: "middle",
                border: "black solid 1px",
                backgroundColor: this.props.color,
                boxShadow: "0 0 0"
            }
        })

    }

    onClick = () => {

        let points;

        if (this.state.multiplier) {
            points = this.state.selectedTile.tileKey[1] * this.state.multiplier;
        } else {
            points = this.state.selectedTile.tileKey[1];
        }


        if (this.state.tileOn) {
            console.log('tile down on cell')
            this.props.selectedTile.isDown = false;

            let tile = this.state.display + points;
            this.props.selectedTile.tileKey = tile;
            this.setState({
                display: this.props.display,
                secondary: this.props.secondary,
                style: {
                    minWidth: "40px",
                    height: "40px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    border: "black solid 1px",
                    backgroundColor: this.props.color,
                    boxShadow: "0 0 0"
                }
            })
            
            console.log('tile up')
            return;
        } else if (this.props.selectedTile.isDown) {
            console.log('tile down')
            return;
        }

        this.setState({
            display: this.state.selectedTile.tileKey[0],
            secondary: points,
            style: {
                border: "black solid 1px",
                minWidth: "40px",
                height: "40px",
                zIndex: "5"
            },
            tileOn: true
        })

        this.props.selectedTile.isDown = true;
        this.props.selectedTile.tileKey = 'cleared';

    }
}

export default Cell;