const rackStyle = {
    width: "600px",
    height: "60px",
    margin: "20px",
    padding: "5px",
    backgroundColor: "#E3EAC8",
    border: "3px solid #5c7551",
}

const testTileStyle = {
    width: "60px",
    height: "60px",
    backgroundColor: "white"
}

function Rack() {
        return (
            <div style={rackStyle}><div style={testTileStyle}></div></div>
        )
}

export default Rack;