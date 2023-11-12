import React from "react";
import {Link} from "react-router-dom";

const Home13_4 = () => {
    return (
        <div>
            <h1>Home Page~!!</h1>
            <p>가장 먼저 보여지는 페이지입니다. </p>
            <ul>
                <li>
                    <Link to={"/about"}>Introduce</Link>
                </li>
                <li>
                    <Link to={"/profiles/velopert"}>Profile Of Velopert</Link>
                </li>
                <li>
                    <Link to={"/profiles/gildong"}>Profile Of Gildong</Link>
                </li>
                <li>
                    <Link to={"/articles"}>게시글 목록</Link>
                </li>
            </ul>
        </div>
    )
}
export default Home13_4;