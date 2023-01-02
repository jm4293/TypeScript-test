import GlobalStyle from "./GlobalStyle";
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import SignUpAge from "./component/Login/SignUpAge";
import SignUpAgree from "./component/Login/SignUpAgree";
// import KakaoToken from "./component/Login/KakaoToken";

function App() {
    return (
        <div>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register/age' element={<SignUpAge/>}/>
                <Route path='/register/agree' element={<SignUpAgree/>}/>
                {/* <Route path='/kakao/callback' element={<KakaoToken/>} /> */}
            </Routes>
        </div>
    )
}

export default App;