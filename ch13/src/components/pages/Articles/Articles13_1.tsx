import React from "react";
import {Link} from "react-router-dom";

const Articles13_1 = () => {
    return (
        <ul>
            <li>
                <Link to={"/articles/1"}>게시글 1</Link>
            </li>
            <li>
                <Link to={"/articles/2"}>게시글 2</Link>
            </li>
            <li>
                <Link to={"/articles/3"}>게시글 3</Link>
            </li>
        </ul>
    )
}
export default Articles13_1;