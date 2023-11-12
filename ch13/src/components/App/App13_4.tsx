import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home13_4";
import About from "../pages/About/About13_3";
import Article from "../pages/Article/Article13_1";
import Articles from "../pages/Articles/Articles13_2";
import Profile from "../pages/Profile/Profile13_1";

const App13_4 = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/profile"} element={<Profile/>}/>
            <Route path={"/articles"} element={<Articles/>}>
                <Route path={":id"} element={<Article/>}/>
            </Route>
        </Routes>
    )
}
export default App13_4;