import React from "react";
import {Link} from "react-router-dom";

const Home13_3 = () => {
    return (
        <div>
            <h1>Home Page!</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <ul>
                <li>
                    <Link to={"/about"}>Introducing!</Link>
                </li>
                <li>
                    <Link to={"/profiles/velopert"}>velopert Profile</Link>
                </li>
                <li>
                    <Link to={"/profiles/gildong"}>gildong</Link>
                </li>
                <li>
                    <Link to={"/profiles/void"}>없는 프로필 찾기</Link>
                </li>
            </ul>
        </div>
    )
}
export default Home13_3;