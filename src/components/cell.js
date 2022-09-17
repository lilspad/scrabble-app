import React, {useState} from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "-",
            color: "plain"
        };
    }

    render() {
        return (
            <div>{this.setState({display: this.state.display })}</div>
        );
    }
}

export default Cell;