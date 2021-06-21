import React, { useEffect, useState } from 'react';
import {DivMatchList, MatchH2, ListPeope, PhotoMatch} from './style'
import axios from 'axios';
import { URL, header } from '../../constants/URL'
import Button from '@material-ui/core/Button';



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
            <Button variant="contained" color="secondary" onClick={reset}>Reset</Button>
        </DivMatchList>
    )
}