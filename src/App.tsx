import React from 'react';
import GlobalStyle from "./GlobalStyle";
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import SignUp from "./component/SignUp";

function App() {
    return (
        <div>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Regist' element={<SignUp/>}/>
            </Routes>
        </div>
    )
}

export default App;
