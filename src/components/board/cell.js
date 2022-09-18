
export default function Cell(props) {
    const cellStyle = {
                width: "40px",
                height: "40px",
                textAlign: "center",
                verticalAlign: "middle",
                border: "white solid 1.5px",
                backgroundColor: props.color
            };
        return (
            <td className="cell" style={cellStyle}>{props.display}</td>
        )
    }