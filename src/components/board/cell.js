
export default function Cell(props) {
    const cellStyle = {
                minWidth: "40px",
                height: "40px",
                textAlign: "center",
                verticalAlign: "middle",
                border: "black solid 1.5px",
                backgroundColor: props.color
            };
        return (
            <td className="cell" style={cellStyle}>{props.display}</td>
        )
    }