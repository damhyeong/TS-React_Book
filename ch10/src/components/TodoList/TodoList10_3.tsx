import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem10_3";

interface Todo{
    id : number;
    text : string;
    checked : boolean;
}

interface PFace{
    todos : Todo[];
    onRemove : (id : number) => void;
}

const TodoList10_3 = ({todos, onRemove} : PFace) => {
    return (
        <div className={"TodoList"}>
            {todos.map((todo) => <TodoListItem todo={todo} onRemove={onRemove} key={todo.id}/>)}
        </div>
    )
}
export default TodoList10_3;