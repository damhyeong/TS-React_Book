import React, {useCallback, useRef, useState} from "react";
import TodoTemplate from "../TodoTemplate/TodoTemplate10_3";
import TodoInsert from "../TodoInsert/TodoInsert10_2";
import TodoList from "../TodoList/TodoList10_2";

interface Todo{
    id : number;
    text : string;
    checked : boolean;
}

const App10_6 = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text : "One", checked : true},
        {id : 2, text : "Two", checked : true},
        {id : 3, text : "Three", checked : false},
    ]);

    const nextId = useRef(4);

    const onInsert = useCallback((text : string) => {
        const nextTodo = {
            id : nextId.current,
            text : text,
            checked : false,
        }
        setTodos(todos.concat(nextTodo));
        nextId.current += 1;
    }, [todos])

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    )
}
export default App10_6;