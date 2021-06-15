import React from 'react';
import styled from 'styled-components'

const DivHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    grid-column: 2 / 3;
    border: 0.2rem solid gray;
    /* @media screen and (max-width: 620px) {

  } */
`
const HeaderH1 = styled.h1`

`

export default function Header () {
    return (
        <DivHeader>
            <button/>
            <HeaderH1>AstroMatch</HeaderH1>
            <button/>
        </DivHeader>
    )
}