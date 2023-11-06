import React from "react";
import {useState} from "react";

const Say3_2 : React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const onClickEnter = () => setMessage('Hi!');
    const onClickLeave = () => setMessage('Good Bye!');

    const [color, setColor] = useState<string>('black');

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color : 'red'}} onClick={() => setColor('red')}>RED</button>
            <button style={{color : 'green'}} onClick={() => setColor('green')}>GREEN</button>
            <button style={{color : 'blue'}} onClick={() => setColor('blue')}>BLUE</button>
        </div>
    )
}
export default Say3_2;