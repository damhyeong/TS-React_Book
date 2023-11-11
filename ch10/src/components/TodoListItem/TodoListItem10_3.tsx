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
}

const TodoListItem10_3 = ({todo, onRemove} : PFace) => {
    const {id, text, checked} = todo;

    return(
        <div className={"TodoListItem"}>
            <div className={cn('checkbox', {checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className={"text"}>{text}</div>
            </div>
            <div className={"remove"} onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};
export default TodoListItem10_3;