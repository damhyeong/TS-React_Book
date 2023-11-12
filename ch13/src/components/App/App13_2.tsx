import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home13_3";
import About from "../pages/About/About13_3";
import Profile from "../pages/Profile/Profile13_1";

const App13_2 = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/profiles/:username"} element={<Profile/>}/>
        </Routes>
    )
}
export default App13_2;