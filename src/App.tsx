import GlobalStyle from "./GlobalStyle";
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import SignUp from "./component/Login/SignUp";
import KakaoToken from "./component/Login/KakaoToken";

function App() {
    return (
        <div>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/kakao/callback' element={<KakaoToken/>} />
            </Routes>
        </div>
    )
}

export default App;