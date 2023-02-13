import React from "react";
import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";

const Header = () => {
    return (
        <Frame>
            <DropdownMenu/>
        </Frame>
    )
}

const Frame = styled.div`
  width: 99vw;
  height: 100px;
  background-color: aquamarine;
  //border: 1px solid rebeccapurple;
`;

export default Header;