import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem11_2";
import './TodoList.scss'

interface PFace {
    todos : {
        id : number;
        text : string;
        checked : boolean;
    }[];
    onRemove : (id : number) => void;
    onToggle : (id : number) => void;
}

const TodoList11_1 = ({todos, onRemove, onToggle} : PFace) => {
    return (
        <div className={"TodoList"}>
            <ul>
                {todos.map(
                    (todo) =>
                        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)
                }
            </ul>
        </div>
    )
}
export default TodoList11_1;