import React from 'react';
import './CardGrande.css'
import styled from "styled-components";
const Bigcard = styled.main`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `;
const Bcimg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `;  
const Bch4 = styled.h4`
    margin-bottom: 15px;
`;  
const Bcdiv = styled.p`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;  


function CardGrande(props) {
    return (
        <Bigcard>
            <Bcimg src={ props.imagem } />
            <Bcdiv>
                <Bch4>{ props.nome }</Bch4>
                <p>{ props.descricao }</p>
            </Bcdiv>
        </Bigcard>
    )
}

export default CardGrande;