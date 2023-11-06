import React from "react";

function App2_6() : JSX.Element{
    const name : string = 'react';
    return <div>{name === 'React' ? <h1>It is React!</h1> : null}</div>
}

export default App2_6