import React, {useCallback, useState} from "react";
import {MdAdd} from "react-icons/md";
import './TodoInsert.scss';

interface PFace{
    onInsert : (text : string) => void;
}

const TodoInsert10_2 = ({onInsert} : PFace) => {
    const [strValue, setStrValue] = useState<string>('');

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setStrValue(e.target.value);
    }
    const onSubmit = useCallback((e : React.FormEvent<HTMLFormElement>) => {
        onInsert(strValue);
        setStrValue('');
        e.preventDefault();
    }, [onInsert, strValue]);
    const onInputSubmit = useCallback((e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') return;
        onInsert(strValue);
        setStrValue('');
        e.preventDefault();
    }, [strValue, onInsert]);

    return (
        <form className={"TodoInsert"} onSubmit={onSubmit}>
            <input value={strValue} placeholder={"Typing Todos"} onChange={onChange} onKeyPress={onInputSubmit}/>
            <button type={"submit"}>
                <MdAdd/>
            </button>
        </form>
    )
}
export default TodoInsert10_2;