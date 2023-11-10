import React, {useState} from "react";
import TodoTemplate from "../TodoTemplate/TodoTemplate10_3";
import TodoInsert from "../TodoInsert/TodoInsert10_1";
import TodoList from "../TodoList/TodoList10_1";

interface todoFace{
    id : number;
    text : string;
    checked : boolean;
}

const App10_5 = () => {
    const [todos, setTodos] = useState<todoFace[]>([
        {id : 1, text : "One", checked : false},
        {id : 2, text : "Two", checked : false},
        {id : 3, text : "Three", checked : true},
    ]);

    return (
        <TodoTemplate>
            <TodoInsert/>
            <TodoList todos={{todos}}/>
        </TodoTemplate>
    )
}
export default App10_5