import React from "react";
import {Route, Routes} from "react-router-dom";
import Layout from '../Layout/Layout13_1';
import Home from "../pages/Home/Home13_4";
import About from "../pages/About/About13_3";
import Articles from "../pages/Articles/Articles13_2";
import Article from "../pages/Article/Article13_1";
import Profile from "../pages/Profile/Profile13_1";

const App13_5 = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/profiles/:username"} element={<Profile/>}/>
            </Route>
            <Route path={"/articles"} element={<Articles/>}>
                <Route path={":id"} element={<Article/>}/>
            </Route>
        </Routes>
    )
}
export default App13_5;