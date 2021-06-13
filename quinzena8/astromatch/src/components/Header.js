import React from 'react';
import styled from 'styled-components'

const DivHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 5px;
    /* @media screen and (max-width: 620px) {

  } */
`
const HeaderH1 = styled.h1`

`

export default function Header () {
    return (
        <DivHeader>
            <HeaderH1>AstroMatch</HeaderH1>

        </DivHeader>
    )
}