import React from "react";
import './TodoList.scss'
import TodoListItem from '../TodoListItem/TodoListItem10_4'

interface Todo{
    id : number;
    text : string;
    checked : boolean;
}

interface PFace{
    todos : Todo[];
    onRemove : (id : number) => void;
    onToggle : (id : number) => void;
}

const TodoList10_4 = ({todos, onRemove, onToggle} : PFace) => {
    return (
        <div className={"TodoList"}>
            {todos.map((todo : Todo) => <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>)}
        </div>
    );
}
export default TodoList10_4;