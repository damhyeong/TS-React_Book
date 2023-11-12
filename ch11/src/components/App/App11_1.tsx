import React, {useCallback, useRef, useState} from "react";

const createBulkTodos = () : Todo[] => {
    const array : Todo[] = [];
    for(let i = 1; i <= 2500; i++){
        array.push({id : i, text : `할 일 ${i}`, checked : false});
    }
    return array;
}

interface Todo{
    id : number;
    text : string;
    checked : boolean;
}
const App11_1 = () => {
    const [todos, setTodos] = useState<Todo[]>(createBulkTodos());
    const nextId = useRef(2501);

    const onInsert = useCallback((text : string) => {
        setTodos(todos.concat({
            id : nextId.current,
            text : text,
            checked : false,
        }))
        nextId.current += 1;
    }, [todos]);
    const onRemove = useCallback((id : number) => {
        setTodos(todos.filter(
            (todo : Todo) => todo.id !== id
        ))
    }, [todos]);
    const onToggle = useCallback((id : number) => {
        setTodos(todos.map(
            (todo : Todo) => (todo.id === id) ? {...todo, checked : !todo.checked} : todo
        ))
    }, [todos]);

    return (
        <TodoTemplate>
            <TodoInsert/>
            <TodoList/>
        </TodoTemplate>
    )
}
export default App11_1;