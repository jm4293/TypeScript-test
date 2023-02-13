import React, {useEffect, useState} from "react";
import styled, {keyframes} from "styled-components";

const Content = () => {
    let count2 = 0;
    const [count, setCount] = useState(0);



    useEffect(() => {
        const scroll = () => {
            const {scrollTop, scrollHeight, clientHeight} = document.documentElement
            console.log("scrollTop ", scrollTop)
            console.log("scrollHeight ", scrollHeight)
            console.log("clientHeight ", clientHeight)
        }

        window.addEventListener('scroll', scroll)
        return () => {
            window.removeEventListener('scroll', scroll)
        }
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            count2++;
            setCount(count+1);
        }, 100)

        return () => clearInterval(timer)
    }, [])

    return (
        <Frame>
            <div>{count2}</div>
            <div>{count}</div>
            <CardBox>
                <Box><Inner/></Box>
            </CardBox>
            <CardBox>
                <Box style={{backgroundColor: "rgb(110, 110, 110)"}}><Inner/></Box>
            </CardBox>
            <CardBox>
                <Box style={{backgroundColor: "rgb(10, 10, 10)"}}/>
            </CardBox>
        </Frame>
    )
}

const Frame = styled.div`
  width: 99vw;
  height: 2000px;
  border: 5px solid blue;
`;

const CardBox = styled.div`
  width: 100%;
  height: 500px;
  position: sticky;
  top: 100px;
  border: 5px solid red;
`;

const move = keyframes`
  0% {
    background: conic-gradient(#ccc 0% 0%, #ffffff 0% 100%)
  }
  6% {
    background: conic-gradient(#ccc 0% 5%, #ffffff 0% 100%)
  }
  12% {
    background: conic-gradient(#ccc 0% 10%, #ffffff 0% 100%)
  }
  18% {
    background: conic-gradient(#ccc 0% 15%, #ffffff 0% 100%)
  }
  25% {
    background: conic-gradient(#ccc 0% 20%, #ffffff 0% 100%)
  }
  33% {
    background: conic-gradient(#ccc 0% 25%, #ffffff 0% 100%)
  }
  38% {
    background: conic-gradient(#ccc 0% 30%, #ffffff 0% 100%)
  }
  44% {
    background: conic-gradient(#ccc 0% 35%, #ffffff 0% 100%)
  }
  50% {
    background: conic-gradient(#ccc 0% 40%, #ffffff 0% 100%)
  }
  56% {
    background: conic-gradient(#ccc 0% 45%, #ffffff 0% 100%)
  }
  62% {
    background: conic-gradient(#ccc 0% 50%, #ffffff 0% 100%)
  }
  68% {
    background: conic-gradient(#ccc 0% 55%, #ffffff 0% 100%)
  }
  75% {
    background: conic-gradient(#ccc 0% 60%, #ffffff 0% 100%)
  }
  82% {
    background: conic-gradient(#ccc 0% 65%, #ffffff 0% 100%)
  }
  88% {
    background: conic-gradient(#ccc 0% 70%, #ffffff 0% 100%)
  }
  94% {
    background: conic-gradient(#ccc 0% 75%, #ffffff 0% 100%)
  }
  100% {
    background: conic-gradient(#ccc 0% 80%, #ffffff 80% 100%)
  }
`;

const move2 = keyframes`
  0% {
    background: conic-gradient(#ccc 0% 0%, #ffffff 0% 100%)
  }
  50% {
    background: conic-gradient(#ccc 0% 50%, #ffffff 50% 100%)
  }
  100% {
    background: conic-gradient(#ccc 0% 80%, #ffffff 80% 100%)
  }
`;

const Box = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  border: 1px solid black;
  background: conic-gradient(#8b22ff 0% 50%, #21f3d6 50% 100%);
  border-radius: 50%;
  position: relative;
    //animation: ${move2} 0.4s forwards;
`;

const Inner = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Content