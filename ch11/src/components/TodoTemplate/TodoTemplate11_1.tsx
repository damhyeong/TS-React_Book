import React from "react";
import './TodoTemplate.scss'

interface PFace {
    children : JSX.Element[];
}

const TodoTemplate11_1 = ({children} : PFace) => {
    return (
        <div className={"TodoTemplate"}>
            <div className={"app-title"}>text is Here</div>
            <div className={"content"}>{children}</div>
        </div>
    )
}
export default TodoTemplate11_1;