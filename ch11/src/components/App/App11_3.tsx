import React, {useCallback, useReducer, useRef} from "react";
import TodoTemplate from "../TodoTemplate/TodoTemplate11_1";
import TodoInsert from "../TodoInsert/TodoInsert11_1";
import TodoList from "../TodoList/TodoList11_1";

interface Todo {
    id : number;
    text : string;
    checked : boolean;
}
interface Action {
    type : string;
    todo? : Todo;
    id? : number;
}

const createBulkTodos = () : Todo[] => {
    const array : Todo[] = [];
    for(let i = 1; i <= 2500; i++){
        array.push({
            id : i,
            text : `My Todo Number is ${i}`,
            checked : false,
        })
    }
    return array;
}

const todoReducer = (todos : Todo[], action : Action) => {
    switch (action.type){
        case 'INSERT': // new Todo
            return todos.concat(action.todo!);
        case 'REMOVE':
            return todos.filter((todo : Todo) => todo.id !== action.id!);
        case 'TOGGLE':
            return todos.map((todo : Todo) => (todo.id === action.id) ? {...todo, checked : !todo.checked} : todo);
        default:
            return todos;
    }
}

const App11_3 = () => {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
    const nextId = useRef(2501);

    const onInsert = useCallback((text : string) => {
        const todo = {
            id : nextId.current,
            text : text,
            checked : false,
        }
        dispatch({type : 'INSERT', todo});
    }, []);
    const onRemove = useCallback((id : number) => {
        dispatch({type : 'REMOVE', id});
    }, []);
    const onToggle = useCallback((id : number) => {
        dispatch({type : 'TOGGLE', id});
    }, []);

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
    )
}
export default App11_3;