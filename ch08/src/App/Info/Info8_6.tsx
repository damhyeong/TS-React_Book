import React, {useReducer} from "react";

interface SFace{
    name : string;
    nickname : string;
}

interface AFace{
    name : string;
    value : string;
}

const reducerSample = (state : SFace, action : AFace) => {
    return {
        ...state,
        [action.name] : action.value
    }
}


const Info8_6 = () => {
    const [state, dispatch] = useReducer(reducerSample,
        {name : '', nickname : ''}
    )

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input onChange={onChange} value={state.name} name={"name"}/>
                <input onChange={onChange} value={state.nickname} name={"nickname"}/>
            </div>
            <div>
                <div>
                    name : <b>{state.name}</b>
                </div>
                <div>
                    nickname : <b>{state.nickname}</b>
                </div>
            </div>
        </div>
    )
}
export default Info8_6;