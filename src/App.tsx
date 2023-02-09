import {Routes, Route} from "react-router-dom";
import Main from "./component/Main/Main";
import RegisterAge from "./component/Login/RegisterAge";
import RegisterAgree from "./component/Login/RegisterAgree";
import RegisterSignUp from "./component/Login/RegisterSignUp";
// import KakaoToken from "./component/Login/KakaoToken";
import {createGlobalStyle} from "styled-components";;

function App() {
    return (
        <div>
            <GlobalStyle/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/register/age' element={<RegisterAge/>}/>
                <Route path='/register/agree' element={<RegisterAgree/>}/>
                <Route path='/register/signup' element={<RegisterSignUp/>}/>
                {/* <Route path='/kakao/callback' element={<KakaoToken/>} /> */}
            </Routes>
        </div>
    )
}

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, h4 {
    margin: 0;
  }
`;

export default App;