import React from "react";
import {Link} from "react-router-dom";

const Home13_2 = () => {
    return (
        <div>
            <h1>Home Page 13-2</h1>
            <p>가장 먼저 보여지는 페이지 <code>"/"</code></p>
            <Link to={"/about"}>Introducing!</Link>
        </div>
    )
}
export default Home13_2;