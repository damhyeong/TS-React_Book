import React, {useState} from "react";

interface nameFace{
    id : number;
    text : string;
}

const IterationSample6_5 = () : JSX.Element => {
    const [names, setNames] = useState<nameFace[]>([
        {id : 1, text : 'One'},
        {id : 2, text : 'Two'},
        {id : 3, text : 'Three'},
        {id : 4, text : 'Four'},
    ]);
    const [inputText, setInputText] = useState<string>('');
    const [nextId, setNextId] = useState<number>(5);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    const onClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        const nextNames : nameFace[] = names.concat({
            id : nextId, text : inputText
        });
        setNextId(nextId + 1);
        setInputText('');
        setNames(nextNames);
    }
    const onKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter')
            return;

        const nextNames : nameFace[] = names.concat({
            id : nextId, text : inputText
        });
        setNextId(nextId + 1);
        setInputText('');
        setNames(nextNames);
    }

    const nameList : JSX.Element[] = names.map((name) =>
        <li key={name.id}>{name.text}</li>
    );
    return (
        <>
            <input value={inputText} onChange={onChange} onKeyPress={onKeyPress}/>
            <button onClick={onClick}>InputText</button>
            <ul>{nameList}</ul>
        </>
    )
}
export default IterationSample6_5;