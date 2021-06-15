import React from 'react';
import styled from 'styled-components'

const DivPage1= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    grid-column: 2 / 3;
    border: 0.2rem solid gray;
    /* @media screen and (max-width: 620px) {

  } */
`
const ImagemPage1 = styled.img`

`

export default function Page1 () {
    return (
        <DivPage1>
            <ImagemPage1 src="https://specials-images.forbesimg.com/imageserve/5…0000&cropX1=904&cropX2=1403&cropY1=262&cropY2=761"/>
            <button/> <button/>
        </DivPage1>
    )
}