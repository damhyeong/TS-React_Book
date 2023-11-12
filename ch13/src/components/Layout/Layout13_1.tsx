import React from "react";
import {Outlet} from "react-router-dom";

const Layout13_1 = () => {
    return (
        <div>
            <header style={{background : 'lightgray', padding : 16, fontSize : 24}}>
                공통된 Header!
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}