const rackStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "350px",
    height: "50px",
    backgroundColor: "#b85039",
    border: "3px solid",
    marginTop: "1.5%",
    marginLeft: "20%"
}

const testTileStyle = {
    minWidth: "40px",
    minHeight: "40px",
    backgroundColor: "#faecc5",
    borderRadius: "10px",
    boxShadow: "1px 2px 1px"
}

let tileArr = [];

for (let i = 0; i < 7; i++) {
    tileArr.push(<div style={testTileStyle}></div>)
}

function Rack() {
        return (
            <div style={rackStyle}>{tileArr}</div>
        )
}

export default Rack;