import React, {useCallback, useRef, useState} from "react";
import TodoTemplate from "../TodoTemplate/TodoTemplate10_3";
import TodoInsert from "../TodoInsert/TodoInsert10_2";
import TodoList from "../TodoList/TodoList10_4";

interface Todo{
    id : number;
    text : string;
    checked : boolean;
}


const App10_8 = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text : "First", checked : false},
        {id : 2, text : "Second", checked : false},
        {id : 3, text : "Third", checked : true},
        {id : 4, text : "Fourth", checked : true},
    ])
    const nextId = useRef(5);

    const onInsert = useCallback((text : string) => {
        const nextTodo : Todo = {
            id : nextId.current,
            text : text,
            checked : false,
        };
        setTodos(todos.concat(nextTodo));
        nextId.current += 1;
    }, [todos]);
    const onRemove = useCallback((id : number) => {
        const nextTodos : Todo[] = todos.filter((todo : Todo) => todo.id !== id);
        setTodos(nextTodos);
    }, [todos]);
    const onToggle = useCallback((id : number) => {
        setTodos(
            todos.map((todo : Todo) =>
                todo.id === id ? {...todo, checked : !todo.checked} : todo
            )
        );
    }, [todos]);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    )
}
export default App10_8;