import React from 'react';
import {Routes, Route} from "react-router-dom";
import About from "../pages/About/About13_1";
import Home from "../pages/Home/Home13_3";

const App13_1 = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
        </Routes>
    )
}
export default App13_1;