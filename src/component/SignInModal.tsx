import React from "react";
import styled from "styled-components";

interface SignInModalProps {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SignInModal({ modalOpen, setModalOpen }: SignInModalProps): React.ReactElement {
    return (
        <ModalOverlay>
            <ModalWrapper>
                <Button>
                    <button onClick={() => setModalOpen(false)}>X</button>
                </Button>
                <EmailInput>
                    <div>이메일</div>
                    <input type='text' placeholder='이메일 입력' />
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
    height: 80vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.1);
`;

const ModalWrapper = styled.div`
    width: 300px;
    height: 200px;
    position: fixed;
    z-index: 1000;
    border: 1px solid black;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
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