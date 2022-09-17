import {useState, useEffect} from 'react';

export default function Cell(props) {
    const [display, setDisplay] = useState(0);
    useEffect(() => {setDisplay(props.display)}, [props.display])
    return (
        <div>{display}</div>
    )
}