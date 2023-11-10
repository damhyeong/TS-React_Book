import React from "react";
import './TodoList.scss';
import TodoListItem from "../TodoListItem/TodoListItem10_1";

const TodoList10_1 = () => {
    return (
        <div className={"TodoList"}>
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
        </div>
    )
}
export default TodoList10_1;