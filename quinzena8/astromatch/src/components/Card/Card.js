import React, { useEffect, useState } from 'react';

import styled from 'styled-components'


const DivCard= styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    padding: 5px;
    border: 1px solid black;
    border-radius: 3px;
    /* @media screen and (max-width: 620px) {

  } */
`
const DivImga= styled.div`

    display: flex;
    justify-content:center;
    /* @media screen and (max-width: 620px) {

  } */
`

export default function Card (prop) {
    
    return <DivCard>
        <DivImga>
            <img width="auto" height="320vh" src={prop.photo} alt="foto" />
         </DivImga>
         <p>{prop.name}</p>
         <p>{prop.bio}</p>
    </DivCard>
}
