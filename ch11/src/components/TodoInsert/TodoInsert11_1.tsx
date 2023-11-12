import React, {useCallback, useRef, useState} from "react";
import {MdAdd} from "react-icons/md";
import './TodoInsert.scss'

interface PFace{
    onInsert : (text : string) => void;
}

const TodoInsert11_1 = ({onInsert} : PFace) => {
    const [strValue, setStrValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>();

    const onChange = useCallback((e : React.ChangeEvent<HTMLInputElement>) => {
        setStrValue(e.target.value);
    }, []);
    const onEnterInsert = useCallback((e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key !== 'Enter') return;
        onInsert(strValue);
        setStrValue('');
        inputRef.current?.focus();
        e.preventDefault();
    }, [onInsert, strValue]);
    const onSubmit = useCallback((e : React.FormEvent<HTMLFormElement>) => {
        onInsert(strValue);
        setStrValue('');
        inputRef.current?.focus();
        e.preventDefault();
    }, [onInsert, strValue]);

    return (
        <form className={"TodoInsert"} onSubmit={onSubmit}>
            <input value={strValue} onChange={onChange} onKeyPress={onEnterInsert} placeholder={"Type Here!!!"}/>
            <button type={"submit"}>
                <MdAdd/>
            </button>
        </form>
    )
}
export default TodoInsert11_1;