import React, {useState} from "react";

interface nameFace{
    id : number;
    text : string;
}

const IterationSample6_6 = () : JSX.Element => {
    const [names, setNames] = useState<nameFace[]>([
        {id : 1, text : 'One'},
        {id : 2, text : 'Two'},
    ]);
    const [inputText, setInputText] = useState<string>('');
    const [nextId , setNextId] = useState<number>(3);

    const onClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        const nextNames = names.concat({
            id : nextId, text : inputText
        });
        setInputText('');
        setNextId(nextId + 1);
        setNames(nextNames);
    }
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    const onEnterPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter')
            return;
        const nextNames : nameFace[] = names.concat({
            id : nextId, text : inputText
        })
        setNextId(nextId + 1);
        setInputText('');
        setNames(nextNames);
    }

    const onRemoveClick = (keyId : number) => {
        const removeNames = names.filter( // filter 함수에 false 된 요소는 없어진다.
            (name : nameFace) => (name.id !== keyId)
        )
        setNames(removeNames);
    }

    const nameList : JSX.Element[] = names.map((name : nameFace) =>
        (<li key={name.id} onDoubleClick={() => onRemoveClick(name.id)}>{name.text}</li>)
    );

    return (
        <div>
            <input onChange={onChange} onKeyPress={onEnterPress} value={inputText}/>
            <button onClick={onClick}>Add</button>
            <ul>{nameList}</ul>
        </div>
    )
}
export default IterationSample6_6;