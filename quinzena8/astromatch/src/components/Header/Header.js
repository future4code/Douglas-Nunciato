import React from 'react';
import styled from 'styled-components'

const DivHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    grid-column: 2 / 3;
    border: 1px solid gray;
    border-radius: 3px;
    /* @media screen and (max-width: 620px) {

  } */
`
const HeaderH1 = styled.h1`

`

export default function Header (props) {
    return (
        <DivHeader>
            <button onClick={props.goToPage1}> 1 Page1</button>
            <HeaderH1>AstroMatch</HeaderH1>
            <button onClick={props.goToMatchListPage}>2 MartchList</button>
        </DivHeader>
    )
}