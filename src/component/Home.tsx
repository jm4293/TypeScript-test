import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignInModal from "./Login/SignInModal";
import ReorderIcon from '@mui/icons-material/Reorder';

function Home(): React.ReactElement {
  const [modalOpen, setModalOpen] = useState(false);

  const KAKAO_TOKEN = localStorage.getItem("KAKAO_TOKEN");


  return (
    <Frame>
      <Header>
        <HeaderList>JM</HeaderList>
        <div style={{ flexGrow: "1" }}></div>
        <HeaderList>조회</HeaderList>
        <HeaderList>지도</HeaderList>
        <LinkStyled to='/SignUp'>회원가입</LinkStyled>

        <HeaderList onClick={() => setModalOpen(true)}>로그인</HeaderList>
        
        <ReorderIconStyled />
      </Header>

      <Content>
        {modalOpen && <SignInModal setModalOpen={setModalOpen} />}
      </Content>

      <Footer>
        <div>
          ABOUT US
        </div>
        <div>
          CONTACT US
        </div>
      </Footer>
    </Frame>
  )
}

const Frame = styled.div`
  /* height: 5000px; */
`;

// 탑
const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0s;
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  background-color: white;
`

const HeaderList = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin-right: 10px;
`;

const ReorderIconStyled = styled(ReorderIcon)`
  cursor: pointer;
`

// 미드
const Content = styled.div`
  width: 100%;
  height: 150vh;
  background-color: rgb(243, 245, 247);
`;

// 바텀
const Footer = styled.div`
  width: 100%;
  height: 10vh;
  /* height: 100%; */
  /* border: 1px solid blue; */
  background-color: white;
`

export default Home;