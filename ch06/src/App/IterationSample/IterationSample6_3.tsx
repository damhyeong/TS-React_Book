import React from "react";

const IterationSample6_3 = () : JSX.Element => {
    const names : string[] = ['Snowman', 'Ice', 'Snow', 'Wind'];
    const nameList = names.map((name : string, index : number) => <li key={index}>{name}</li>)

    return <ul>{nameList}</ul>;

}
export default IterationSample6_3;