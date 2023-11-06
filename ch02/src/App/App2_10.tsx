import React from "react";

function App2_10() : JSX.Element {
    const name : string = '리액트';
    return (
        <div
            style={{
                background : 'black',
                color : 'aqua',
                fontSize : '48px',
                fontWeight : 'bold',
                padding : 16,
            }}
        >
            {name}
        </div>
    )
}
export default App2_10;