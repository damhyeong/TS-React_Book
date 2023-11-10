import React from "react";
import './TodoTemplate.scss'

interface CFace{
    children : JSX.Element[]
}

const TodoTemplate10_3 = ({children} : CFace) => {
    return (
        <div className={"TodoTemplate"}>
            <div className={"app-title"}></div>
            <div className={"content"}>{children}</div>
        </div>
    )
}
export default TodoTemplate10_3;