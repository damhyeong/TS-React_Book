import React, {useState} from "react";

const Counter8_1 = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <div>
            <p>Value is <b>{value}</b></p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}
export default Counter8_1;