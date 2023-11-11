import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem10_2";
import './TodoList.scss'


interface Todo {
    id : number;
    text : string;
    checked : boolean;
}
interface Todos{
    todos : Todo[];
}

const TodoList10_2 = ({todos} : Todos) => {
    return (
        <div>
            {todos.map((todo : Todo) => (<TodoListItem key={todo.id} todo={todo}/>))}
        </div>
    )
}
export default TodoList10_2;