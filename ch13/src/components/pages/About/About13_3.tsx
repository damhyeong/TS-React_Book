import React from "react";
import {useSearchParams} from 'react-router-dom'

const About13_3 = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get("detail") as string;
    const mode = searchParams.get("mode") as string

    const onToggleDetail = () => {
        setSearchParams({mode, detail : detail === 'true' ? 'false' : 'true'});
    }
    const onIncreaseMode = () => {
        const nextMode = (mode === null || NaN) ? '1' : (parseInt(mode) + 1).toString();
        setSearchParams({mode : nextMode, detail});
    }
    return (
        <div>
            <h1>About13-3</h1>
            <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>detail : {detail}</p>
            <p>mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle Detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    )
}
export default About13_3;