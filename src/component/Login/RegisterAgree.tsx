import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface checkList {
    id: number,
    title: string
}

function RegisterAgree() {
    const [checkItem, setCheckItem] = useState<number[]>([]);
    const [isButton, setIsButton] = useState<boolean>(true);

    useEffect(() => {
        checkItem.includes(0) && checkItem.includes(1) ? setIsButton(false) : setIsButton(true);
    }, [checkItem])

    const checkList: checkList[] = [
        { id: 0, title: "필수 0" },
        { id: 1, title: "필수 1" },
        { id: 2, title: "선택 2" },
        { id: 3, title: "선택 3" },
        { id: 4, title: "선택 4" },
        { id: 5, title: "선택 5" }
    ]

    const checkAll = (checked: boolean) => {
        if (checked) {
            const tempArray: number[] = []
            checkList.map((element, index) => {
                return tempArray.push(element.id);
            })
            setCheckItem(tempArray);
        }
        else {
            setCheckItem([]);
        }
    }

    const checkSingle = (checked: boolean, id: number) => {
        if (checked) {
            setCheckItem(prev => [...prev, id])
        }
        else {
            setCheckItem(checkItem.filter((e) => e !== id));
        }
    }

    const allow = () => {

    }

    return (
        <Frame>
            <Layout>
                <span>전체 동의</span>
                <input type="checkbox" onChange={(e) => checkAll(e.target.checked)} checked={checkItem.length === checkList.length ? true : false} />
                {
                    checkList.map((element, index) => {
                        return (
                            <div key={index}>
                                <span>{element.title}</span>
                                <input type="checkbox" onChange={(e) => checkSingle(e.target.checked ,element.id)} checked={checkItem.includes(element.id) ? true : false} />
                            </div>
                        )
                    })
                }
                <Link to="/"><button>비동의</button></Link>
                <Link to="/register/signup"><button onClick={allow} disabled={isButton}>동의</button></Link>
            </Layout>
        </Frame>
    )
}

const Frame = styled.div`
    background-color: rgb(243, 245, 247);
    padding: 120px 0 170px;
    width: 100%;
    height: 100vh;
`;

const Layout = styled.div`  
    width: 450px;
    min-height: 682px;
    margin: 0 auto;
    background-color: white;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export default RegisterAgree;