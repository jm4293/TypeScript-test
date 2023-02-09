import React, {useEffect, useState} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import {useSelector, useDispatch} from "react-redux";
import {Ismodal, ismodal} from "../Store/store";
import styled from "styled-components";

function Main(): React.ReactElement {
    return (
        <Frame>
            <Header/>
            <Content/>
            <Footer/>
        </Frame>
    )
}

const Frame = styled.div`
  //border: 1px solid blue;
  //margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Main;