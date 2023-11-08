import React from "react";

const IterationSample6_2 = () => {
    const names : string[] = ['Snowman', 'Ice', 'Snow', 'Wind']
    const nameList : JSX.Element[] = names.map(name => <li>{name}</li>);
    return <ul>{nameList}</ul>
};
export default IterationSample6_2;