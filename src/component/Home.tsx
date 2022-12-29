import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignInModal from "./SignInModal";

function Home(): React.ReactElement {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Frame>
      <Header>
        <div>우리동네</div>
        <div style={{flexGrow: "1"}}></div>
        <div>조회</div>
        <LinkStyled to='/Regist'>회원가입</LinkStyled>
        <SignIn onClick={() => setModalOpen(true)}>로그인</SignIn>
      </Header>
      <Content>
        {modalOpen && <SignInModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
      </Content>
      <Footer>
      </Footer>
    </Frame>
  )
}

const Frame = styled.div`
  height: 5000px;

`;

// 탑
const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0s;
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
  background-color: white;
`

const Nav = styled.div`


`;

const SignIn = styled.div`
  cursor: pointer;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  margin: 0 20px;
  color: black;
  cursor: pointer;
`;

// 미드
const Content = styled.div`
/* clear: both; */
  width: 100%;
  /* margin-top: 80px; */
  height: 80vh;
  /* border: 1px solid red; */
`;

// 바텀
const Footer = styled.div`
  width: 100%;
  height: 13vh;
  /* height: 100%; */
  /* border: 1px solid blue; */
  background-color: white;
`

export default Home;