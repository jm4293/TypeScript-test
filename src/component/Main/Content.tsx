import React, {useEffect} from "react";
import styled from "styled-components";

const Content = () => {
    const scroll = () => {
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement
        console.log("scrollTop ", scrollTop)
        console.log("scrollHeight ", scrollHeight)
        console.log("clientHeight ", clientHeight)
    }

    useEffect(() => {
        window.addEventListener('scroll', scroll)
        return () => {
            window.removeEventListener('scroll', scroll)
        }
    },[scroll])

    return (
        <Frame>
            <CardBox>
                <Box style={{backgroundColor: "rgb(210, 210, 210)"}}/>
            </CardBox>
            <CardBox>
                <Box style={{backgroundColor: "rgb(110, 110, 110)"}}/>
            </CardBox>
            <CardBox>
                <Box style={{backgroundColor: "rgb(10, 10, 10)"}}/>
            </CardBox>
        </Frame>
    )
}

const Frame = styled.div`
  //border: 1px solid black;
  //display: inline-block;
  width: 99vw;
  height: 1800px;
  //margin-top: 300px;
  //margin-bottom: 1600px;
  border: 5px solid blue;
`;

const CardBox = styled.div`
  position: sticky;
  top: 100px;
  margin-top: 50px;
  border: 5px solid red;
`;

const Box = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
`;

export default Content