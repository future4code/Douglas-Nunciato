import styled from 'styled-components'

export const DivMatchList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    border: 1px solid gray;
    border-radius: 3px;
    overflow-y: auto;
    @media screen and (max-width: 620px) {
        grid-column: 1/ -1;
    }
`
export const MatchH2 = styled.h3`
    color: green;
    align-self: center;
`
export const ListPeope = styled.div`
    display: flex;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 5px;
`
export const PhotoMatch = styled.img`
    margin: 5px;
    border-radius: 40%;
    width: 30px;
    height: 30px;
    object-position: center;
    grid-column: 1/2;
    grid-row: 2 / 4;
`