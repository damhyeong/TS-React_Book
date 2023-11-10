import React from "react";
import './TodoTemplate.scss';

interface CFace{
    children : string;
}

const TodoTemplate10_1 = ({children} : CFace) => {
    return (
        <div className={"TodoTemplate"}>
            <div className={"app-title"}>일정 관리</div>
            <div className={"content"}>{children}</div>
        </div>
    )
}
export default TodoTemplate10_1;