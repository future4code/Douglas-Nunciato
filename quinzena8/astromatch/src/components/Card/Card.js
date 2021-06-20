import React, { useEffect, useState } from 'react';

import styled from 'styled-components'


const DivCard= styled.div`
    background-color: lightblue;
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

export default function Card (props) {
    
    return <DivCard>
        <DivImga>
            <img width="auto" height="320vh" src={props.photo} alt="foto" />
         </DivImga>
         <p>{props.name}</p>
         <p>{props.bio}</p>
    </DivCard>
}
