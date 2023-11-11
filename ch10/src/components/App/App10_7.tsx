import React, {useCallback, useRef, useState} from "react";
import TodoTemplate from "../TodoTemplate/TodoTemplate10_3";
import TodoInsert from "../TodoInsert/TodoInsert10_2";
import TodoList from "../TodoList/TodoList10_3";

interface Todo{
    id : number;
    text : string;
    checked : boolean;
}

const App10_7 = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text : "First", checked : false},
        {id : 2, text : "Second", checked : false},
        {id : 3, text : "Thrid", checked : true},
    ])
    const nextId = useRef(4);
    const onInsert = useCallback((text : string) => {
        const nextTodo : Todo = {
            id : nextId.current,
            text : text,
            checked : false,
        }
        setTodos(todos.concat(nextTodo));
        nextId.current += 1;
    }, [todos]);
    const onRemove = useCallback((id : number) => {
        const nextTodos = todos.filter((todo : Todo) => todo.id !== id);
        setTodos(nextTodos);
    }, [todos]);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove}/>
        </TodoTemplate>
    )
}
export default App10_7;