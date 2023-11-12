import React from "react";
import cn from "classnames"
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from "react-icons/md";
import './TodoListItem.scss'

interface PFace {
    todo : {
        id : number;
        text : string;
        checked : boolean;
    }
    onRemove : (id : number) => void;
    onToggle : (id : number) => void;
}

const TodoListItem11_1 = ({todo, onRemove, onToggle} : PFace) => {
    const {id, text, checked} = todo;

    return (
        <div className={"TodoListItem"}>
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className={"text"}>{text}</div>
            </div>
            <div className={"remove"} onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}
export default TodoListItem11_1;