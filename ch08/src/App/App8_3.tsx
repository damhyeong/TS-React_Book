import React, {useState} from "react";
import Info from "./Info/Info8_5";

const App8_3 = () => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => setVisible(!visible)}
            >{visible ? 'Hide' : 'Seek'}</button>
            <hr/>
            {visible ? (<Info/>) : null}
        </div>
    )
}
export default App8_3;