import React from "react";

function App2_9() : JSX.Element{
    const name : string = '리액트';
    const style = {
        backgroundColor : 'black',
        color : 'aqua',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : 16,
    };
    return <div style={style}>{name}</div>
}
export default App2_9