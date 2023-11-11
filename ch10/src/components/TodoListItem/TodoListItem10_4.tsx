import React from "react";
import cn from 'classnames';
import './TodoListItem.scss';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";

interface PFace{
    todo : {
        id : number;
        text : string;
        checked : boolean;
    };
    onRemove : (id : number) => void;
    onToggle : (id : number) => void;
}

const TodoListItem10_4 = ({todo, onRemove, onToggle} : PFace) => {
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
export default TodoListItem10_4;