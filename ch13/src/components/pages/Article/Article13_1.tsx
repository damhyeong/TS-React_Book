import React from "react";
import {useParams} from "react-router-dom";

const Article13_1 = () => {
    const {id} = useParams() as {id : string}

    return (
        <div>
            <h2>게시글 {id}</h2>
        </div>
    )
}
export default Article13_1;