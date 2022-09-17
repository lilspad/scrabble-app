import React from 'react';

const cellTypes={
    0: {
        display: "-",
        color: "plain"
    },
    1: {
        display: "DLS",
        color: "sage"
    },
    2: {
        display: "TLS",
        color: "lilac"
    },
    3: {
        display: "DWS",
        color: "tange"
    },
    4: {
        display: "TWS",
        color: "rust"
    },
    5: {
        display: "*",
        color: "rays"
    }
};
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
            <div>{}</div>
        );
    }
}

export default Cell;