// 
// RegisterModal -> RegisterAge -> RegisterAgree
//

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "./KakaoOAuth";
import { Link } from "react-router-dom";

interface SignInModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function RegisterModal({ setModalOpen }: SignInModalProps): React.ReactElement {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <ModalOverlay>
            <ModalWrapper>
                <div>
                    <CancelButton>
                        <button onClick={() => setModalOpen(false)}>X</button>
                    </CancelButton>
                </div>
                <div>간편 로그인</div>
                <div>
                    <KakaoSignIn>
                        <a href={KAKAO_AUTH_URL}>
                            <KakaoSignInButton><img src="/images/kakao_login_medium_narrow.png" /></KakaoSignInButton>
                        </a>
                    </KakaoSignIn>
                </div>
                <div>
                    <Line>
                        <LeftLine></LeftLine>
                        <MiddleOr>OR</MiddleOr>
                        <RightLine></RightLine>
                    </Line>
                </div>
                <div style={{marginTop: "10px"}}>이메일 로그인</div>
                <Email>
                    <EmailInput>
                        <div>이메일</div>
                        <input ref={inputRef} type='text' placeholder="이메일"/>
                    </EmailInput>
                </Email>
                <Password>
                    <PasswordInput>
                        <div>비밀번호</div>
                        <input type='password' placeholder="비밀번호"/>
                    </PasswordInput>
                </Password>
                <Button>
                    <SigninButton>
                        <button>로그인</button>
                    </SigninButton>
                    <SignupButton>
                        <div>처음이세요? <Link to='/register/age'><span>회원가입하기</span></Link></div>
                    </SignupButton>
                    <SearchButton>
                        <Link to='/find'><div>비밀번호를 잊으셨나요?</div></Link>
                    </SearchButton>
                </Button>
            </ModalWrapper>
        </ModalOverlay>
    )
}

// 모달 뒷 배경
const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    /* z-index: 999; */
    background-color: rgba(0, 0, 0, 0.1);
`;

// 모달 창
const ModalWrapper = styled.div`
    width: 400px;
    height: 700px;
    position: fixed;
    /* z-index: 1000; */
    border: 1px solid black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
`;

// 뒤로가기 버튼
const CancelButton = styled.div`
    /* margin: 0; */
    /* padding: 0; */
    /* margin-right: 10px; */
    /* padding-right: 10px; */
    width: 100%;
    /* display: flex; */
    /* justify-content: end; */
`;

// 간편 로그인
const KakaoSignIn = styled.div`
    
`;

const KakaoSignInButton = styled.button`
    border: none;
    padding: 0;
    /* width: 100%; */
    height: 100%;
    border-radius: 12px;
    cursor: pointer;
`

// - or -
const Line = styled.div`
    width: 200px;
    display: flex;
`;

const LeftLine = styled.div`
    width: 75px;
    height: 1px;
    position: relative;
    top: 9px;
    background-color: #dddfe4;
`;

const MiddleOr = styled.div`
    width: 50px;
    font-weight: bold;
    text-align: center;
    display: inline;
    color:#dddfe4;
`;

const RightLine = styled.div`
    width: 75px;
    height: 1px;
    position: relative;
    top: 9px;
    background-color: #dddfe4;
`;

// 이메일 입력
const Email = styled.div`
    
`;

const EmailInput = styled.div`
    /* margin-top: 27px;
    position: relative;
    padding: 10px 0 11px;
    border-bottom: 1px solid #dddfe4; */
`;

const EmailInputText = styled.input`
    /* position: relative;
    display: block;
    cursor: pointer;
    border: 0; */
`;

const EmailInputTextLabel = styled.label`
    position: absolute;
    color: rgb(127, 135, 143);
    left: 0.5vw;
    bottom: 0.8vh;
    pointer-events: none;
`;

// 비밀번호 입력
const Password = styled.div`
    margin-top: 10px;
`;

const PasswordInput = styled.div`
    margin-bottom: 10px;
`;

const PasswordInputText = styled.input`
    /* border-color: rgb(140, 186, 232); */
    /* border-radius: 11px; */
    /* border-width: 2px; */
`;

// 버튼
const Button = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
`;

const SigninButton = styled.div`

`;

const SignupButton = styled.div`

`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const SearchButton = styled.div`
    
`

export default RegisterModal;