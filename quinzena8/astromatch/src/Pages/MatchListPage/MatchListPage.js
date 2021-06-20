import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { URL, header } from '../../constants/URL'

const DivMatchList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    border: 1px solid gray;
    border-radius: 3px;
    overflow-y: auto;
    /* @media screen and (max-width: 620px) {

  } */
`
const MatchH2 = styled.h2`

`
const ListPeope = styled.div`
    display: flex;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 5px;
`
const PhotoMatch = styled.img`
    margin: 5px;
    border-radius: 40%;
    width: 30px;
    height: 30px;
    object-position: center;
    grid-column: 1/2;
    grid-row: 2 / 4;
`;

export default function MatchListPage() {
    const [matchList, setMatchList] = useState([])
    const reset = () => {
        axios
          .put(`${URL}/clear`, header)
          .then((res) => {
            alert(res.data.message);
          })
          .catch((erro) => {
            console.log(erro);
          });
      };
    

    const matches = () => {
        axios.get(`${URL}/matches`).then((res) => {
            setMatchList(res.data.matches)
        }).catch((error) => {
            alert(error)
        })
    }
    useEffect(() => {
        matches();
    }, [matchList])

    return (
        <DivMatchList>
            <MatchH2>Pessoas com Match</MatchH2>
            {matchList ? (
                <>
                    {matchList.map((person) => {
                        return (
                            <ListPeope>
                                <PhotoMatch src={person.photo} alt="foto" />
                                <p>{person.name}</p>
                            </ListPeope>
                        );
                    })}{" "}
                </>
            ) : (
                <p>Carregando ...</p>
            )}
            <button onClick={reset}>Reset</button>
        </DivMatchList>
    )
}