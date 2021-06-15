import React from 'react';
import styled from 'styled-components'

const DivMatchList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    grid-column: 2 / 3;
    border: 0.2rem solid gray;
    /* @media screen and (max-width: 620px) {

  } */
`
const MatchH2 = styled.h2`

`

export default function MatchList () {
    return (
        <DivMatchList>
            <MatchH2>Pessoas com Match</MatchH2>

        </DivMatchList>
    )
}