import React, {useCallback, useRef, useState} from "react";
import TodoTemplate from "../TodoTemplate/TodoTemplate11_1";
import TodoInsert from "../TodoInsert/TodoInsert11_1";
import TodoList from "../TodoList/TodoList11_1";

interface Todo {
    id : number;
    text : string;
    checked : boolean;
}

const createBulkTodos = () : Todo[] => {
    const array : Todo[] = [];
    for(let i = 0; i <= 2500; i++){
        array.push({
            id : i,
            text : `My Todo ${i}`,
            checked : false,
        });
    }
    return array;
}

const App11_2 = () => {
    const [todos, setTodos] = useState<Todo[]>(createBulkTodos());
    const nextId = useRef(2501);

    const onInsert = useCallback((text : string) => {
        const todo : Todo = {
            id : nextId.current,
            text : text,
            checked : false,
        }
        setTodos(todos => todos.concat(todo))
        nextId.current += 1;
    }, []);
    const onRemove = useCallback((id : number) => {
        setTodos(todos => todos.filter((todo : Todo) => todo.id !== id));
    }, []);
    const onToggle = useCallback((id : number) => {
        setTodos(todos =>
            todos.map(
                (todo : Todo) => todo.id === id ? {...todo, checked : !todo.checked} : todo
            )
        )
    }, [])
    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        </TodoTemplate>
    )
}
export default App11_2;