import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home13_4";
import About from "../pages/About/About13_3";
import Article from "../pages/Article/Article13_1";
import Articles from "../pages/Articles/Articles13_1";
import Profile from "../pages/Profile/Profile13_1";

const App13_3 = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/profiles/:username"} element={<Profile/>}/>
            <Route path={"/articles"} element={<Articles/>}/>
            <Route path={"/articles/:id"} element={<Article/>}/>
        </Routes>
    );
};
export default App13_3;