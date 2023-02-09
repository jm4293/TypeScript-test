import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterSignUp() {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [nickname, setNickname] = useState<string>();

    const signUp = async () => {
        const signup = {
            email: email,
            password: password,
            nickname: nickname
        }

        const res = await axios.post("http://localhost:3000/register/signup/post", null, {
            
        })
    }

    return (
        <Frame>
            <Layout>
                <div>기본정보입력</div>
                <div>회원가입을 위해서 이메일 인증이 진행되며, 인증이 완료되기 전까지 회원가입이 완료가 되지 않습니다.</div>
                <div><input type="text" onChange={e => setEmail(e.target.value)} placeholder="이메일" /></div>
                <div><input type="password" onChange={e => setPassword(e.target.value)} placeholder="비밀번호" /></div>
                <div><input type="text" onChange={e => setNickname(e.target.value)} placeholder="닉네임" /></div>
                <Link to='/'><button>취소</button></Link>
                <button onClick={signUp}>가입하기</button>
                <div>이미 회원이신가요? <Link to='/'><span>로그인하기</span></Link></div>
            </Layout>
        </Frame>
    )
}

const Frame = styled.div`
    background-color: rgb(243, 245, 247);
    padding: 120px 0 170px;
    width: 100%;
    height: 100vh;
`;

const Layout = styled.div`  
    width: 450px;
    min-height: 682px;
    margin: 0 auto;
    background-color: white;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;


export default RegisterSignUp;