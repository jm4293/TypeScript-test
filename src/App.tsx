import GlobalStyle from "./GlobalStyle";
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import RegisterAge from "./component/Login/RegisterAge";
import RegisterAgree from "./component/Login/RegisterAgree";
import RegisterSignUp from "./component/Login/RegisterSignUp";
// import KakaoToken from "./component/Login/KakaoToken";

function App() {
    return (
        <div>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register/age' element={<RegisterAge/>}/>
                <Route path='/register/agree' element={<RegisterAgree/>}/>
                <Route path='/register/signup' element={<RegisterSignUp/>}/>
                {/* <Route path='/kakao/callback' element={<KakaoToken/>} /> */}
            </Routes>
        </div>
    )
}

export default App;