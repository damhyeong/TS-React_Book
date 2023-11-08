import React, {useState} from "react";

interface nameFace{
    id : number;
    text : string;
}

const IterationSample6_4 = () : JSX.Element => {
    const [names, setNames] = useState<nameFace[]>([
        {id : 1, text : 'Snowman'},
        {id : 2, text : 'Ice'},
        {id : 3, text : 'Snow'},
        {id : 4, text : 'Wind'},
    ]);
    const [inputText, setInputText] = useState<string>('');
    const [nextId, setNextId] = useState<number>(5);

    const namesList : JSX.Element[] = names.map((name, index) =>
        <li key={name.id}>{name.text}</li>
    )
    return <ul>{namesList}</ul>
}
export default IterationSample6_4;