import React, { useState } from "react";
import styled from "styled-components";

interface checkList {
    id: number,
    title: string
}

function SignUpAgree() {
    const [checkItem, setCheckItem] = useState<number[]>([]);

    const checkList: checkList[] = [
        { id: 6, title: "선택 0" },
        { id: 1, title: "선택 1" },
        { id: 2, title: "선택 2" },
        { id: 3, title: "선택 3" },
        { id: 4, title: "선택 4" },
        { id: 5, title: "선택 5" }
    ]

    const CheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked)

        if (e.target.checked === true) {
            const tempArray: number[] = []
            checkList.map((element, index) => {
                return tempArray.push(element.id);
            })
            console.log(tempArray)
            setCheckItem(tempArray);
        }
        else {
            setCheckItem([]);
        }
    }

    return (
        <Frame>
            <Layout>
                <span>전체 동의</span>
                <input type="checkbox" onChange={CheckAll} />
                {
                    checkList.map((element, index) => {
                        return (
                            <div key={index}>
                                <span>{element.title}</span>
                                <input type="checkbox" checked={checkItem.includes(element.id) ? true : false}/>
                            </div>
                        )
                    })
                }
            </Layout>
        </Frame>
    )
}

export default SignUpAgree;

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