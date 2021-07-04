import styled from 'styled-components'


export const DivHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    grid-column: 2 / 3;
    border: 1px solid gray;
    border-radius: 3px;
    @media screen and (max-width: 620px) {
        grid-column: 1/ -1;
    }

`
export const TituloAudio = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const HeaderH1 = styled.h1`
color:red;
`