import React, { useState } from 'react';
import styled from "styled-components";

function DropdownMenu() {
    const [isMenu, setIsMenu] = useState(false);

    return (
        <>
            <Menu onMouseEnter={() => setIsMenu(true)} onMouseLeave={() => setIsMenu(false)}>
                menu
            </Menu>
            <Detail isMenu={isMenu}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </Detail>

        </>
    );
}

const Menu = styled.div`
  border: 1px solid blue;
  width: 50%;
  margin: auto;
`;

interface DetailProps {
    isMenu: boolean;
}

const Detail = styled.div<DetailProps>`
  border: 1px solid red;
  display: ${props => props.isMenu ? "block" : "none"};
  
  &:hover {
    display: block;
    cursor: pointer;
  }
`;

export default DropdownMenu;