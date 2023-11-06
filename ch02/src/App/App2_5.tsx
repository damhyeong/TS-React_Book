import React from "react";

function App2_5() : JSX.Element{
    const name : string = 'React';
    return(
        <div>
            {name === 'React' ? (
                <h1>It is React!</h1>
            ) : (
                <h1>It is Not React!</h1>
            )}
        </div>
    )
}
export default App2_5