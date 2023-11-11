import React from "react";
import './TodoListItem.scss'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from "react-icons/md";
import cn from 'classnames';

interface Todo{
    todo : {
        id : number;
        text : string;
        checked : boolean
    }
}

const TodoListItem10_2 = ({todo} : Todo) => {
    const {text, checked} = todo;

    return (
        <div className={"TodoListItem"}>
            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className={"text"}>{text}</div>
            </div>
            <div className={"remove"}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}
export default TodoListItem10_2;