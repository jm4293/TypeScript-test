import React from "react";
import styled from "styled-components";

function SignUp() {
    return(
        <Frame>
            <MemberLayout>

            </MemberLayout>
        </Frame>
    )
}

const Frame = styled.div`
    background-color: rgb(243, 245, 247);
    padding: 120px 0 170px;
    width: 100%;
    height: 100vh;
`;

const MemberLayout = styled.div`
    /* border: 1px solid black; */
    
    width: 450px;
    min-height: 682px;
    margin: 0 auto;
    background-color: white;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export default SignUp;