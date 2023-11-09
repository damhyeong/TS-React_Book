import React, {useReducer} from "react";

interface SFace{
    value : number;
}
interface AFace{
    type : string;
}

const reducer = (state : SFace, action : AFace) => {
    switch (action.type){
        case 'INCREMENT':
            return {value : state.value + 1};
        case 'DECREMENT':
            return {value : state.value - 1};
        default:
            return state;
    }
}

const Counter8_2 = () => {
    const [state, dispatch] = useReducer(reducer, {value : 0});

    return (
        <div>
            <p>Value of Counter Is : <b>{state.value}</b></p>
            <button onClick={() => dispatch({type : 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type : 'DECREMENT'})}>-1</button>
        </div>
    )
}
export default Counter8_2;