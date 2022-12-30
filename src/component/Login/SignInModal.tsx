import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import { KAKAO_AUTH_URL } from "./KakaoOAuth";

interface SignInModalProps {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignInModal({ setModalOpen }: SignInModalProps): React.ReactElement {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, [])

    return (
        <ModalOverlay>
            <ModalWrapper>
                <CancelButton>
                    <button onClick={() => setModalOpen(false)}>X</button>
                </CancelButton>
                <KakaoSignIn>
                    <a href={KAKAO_AUTH_URL}>
                        <KakaoSignInButton type="button"><img src="/images/kakao_login_medium_narrow.png"/></KakaoSignInButton>
                    </a>
                </KakaoSignIn>
                <Line>
                    <LeftLine></LeftLine>
                    <MiddleOr>OR</MiddleOr>
                    <RightLine></RightLine>
                </Line>
                <EmailInput>
                    <div>이메일</div>
                    <input ref={inputRef} type='text' placeholder='아이디(이메일)' />
                </EmailInput>
                <PasswordInput>
                    <div>비밀번호</div>
                    <input type='password' placeholder='비밀번호 입력' />
                </PasswordInput>
                <SigninButton>
                    <button>로그인</button>
                </SigninButton>
                <SignupButton>
                    <button>회원가입</button>
                    <button>이메일, 비밀번호 찾기</button>
                </SignupButton>
            </ModalWrapper>
        </ModalOverlay>
    )
}

const ModalOverlay = styled.div`
    width: 100%;
    height: 100%;
    /* z-index: 999; */
    background-color: rgba(0, 0, 0, 0.1);
`;

const ModalWrapper = styled.div`
    width: 300px;
    height: 300px;
    position: fixed;
    /* z-index: 1000; */
    border: 1px solid black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const CancelButton = styled.div`
    /* margin: 0; */
    /* padding: 0; */
    /* margin-right: 10px; */
    padding-right: 10px;
    width: 100%;
    display: flex;
    justify-content: end;
`;

const KakaoSignIn = styled.div`
    
`;

const KakaoSignInButton = styled.button`
    border: none;
    padding: 0;
    width: 100%;
    height: 0;
    border-radius: 12px;
`

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

const EmailInput = styled.div`
    margin-bottom: 10px;
`;

const PasswordInput = styled.div`
    margin-bottom: 10px;
`;

const SigninButton = styled.div`
    margin-bottom: 10px;
`;

const SignupButton = styled.div`

`;

export default SignInModal;