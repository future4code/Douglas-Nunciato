import styled from 'styled-components'

export const DivPage1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    border: 1px solid gray;
    border-radius: 3px;
    @media screen and (max-width: 620px) {
        grid-column: 1/ -1;
    }

`
export const BotoesCampo = styled.div`
    width: 25vw;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    .botaoNao{
        border: 1px solid red;
        border-radius: 50%;
        cursor: pointer;
    }
    .botaoCurti{
        color: green;
        border: 1px solid green;
        border-radius: 50%;
        cursor: pointer;
    }
`