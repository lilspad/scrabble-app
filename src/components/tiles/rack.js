const rackStyle = {
    width: "600px",
    height: "60px",
    margin: "20px",
    padding: "5px",
    backgroundColor: "#E3EAC8",
    border: "3px solid #c9823e",
}

const testTileStyle = {
    width: "60px",
    height: "60px",
    backgroundColor: "lightgray"
}

function Rack() {
        return (
            <div style={rackStyle}><div style={testTileStyle}></div></div>
        )
}

export default Rack;