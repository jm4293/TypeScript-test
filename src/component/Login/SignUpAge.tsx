import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function SignUpAge() {
    const [birth, setBrith] = useState<string>("");
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBrith(e.target.value);
    }

    const onClick = () => {
        const regBirth = /^(19[0-9][0-9]|20[0-2][0-9])(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

        regBirth.test(birth) 
            ? Number(birth.slice(0, 4)) < 2010 
                ? navigate("/register/agree")
                : alert("회원 서비스는 만 14세 이상만 이용할실 수 있습니다.")
            : alert("생년월일 잘못 입력")
    }

    return (
        <Frame>
            <Layout>
                <form>
                    <div>생년월일 입력</div>
                    <input type="text" onChange={onChange} placeholder="생년월일 8자리" value={birth} />
                    <div>생년월일 정보는 가입 연령 확인에만 이용됩니다.</div>
                    <button type="button" onClick={onClick}>다음</button>
                    <div>이미 회원이신가요? <Link to="/"><span>로그인으로 돌아가기</span></Link></div>
                </form>
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

export default SignUpAge;