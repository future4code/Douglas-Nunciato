import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Card from '../../components/Card/Card'
import axios from 'axios';
import { URL, header } from '../../constants/URL'

const DivPage1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    border: 1px solid gray;
    border-radius: 3px;
    /* @media screen and (max-width: 620px) {

  } */
`
const ImagemPage1 = styled.img`

`


export default function Page1() {
    const [people, setPeople] = useState(undefined)

    const getPeople = () => {
        if (people === null) {
            alert(
                "NINGUEM"
            )
        } else {
            axios.get(`${URL}/person`).then((res) => {
                setPeople(res.data.profile)

            }).catch((error) => {
                alert(error)
            })
        }
    }
    const choicePeople = (choice) => {
        const body = {
            choice: choice,
            id: people.id
        }
        setPeople(undefined)
        
        axios.post(`${URL}/choose-person`, body, header)
            .then((res) => {
                if (res.data.isMatch) {
                    alert("Deu Match!!");
                }
                getPeople();
            })
            .catch((err) => {
                alert(err);
            })
    }
    const onClickNao = () => {
        choicePeople(false)

    }
    const onClickCurti = () => {
        choicePeople(true)
    }

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <DivPage1>
            {people ?
               ( <>
                    <Card
                        photo={people.photo}
                        name={people.name}
                        age={people.age}
                        bio={people.bio}
                    />
                    <div>
                        <button onClick={onClickNao}>NAO</button> <button onClick={onClickCurti}>Curtir</button>
                    </div>
                </>) : <p>Carregando ...</p>
            }
        </DivPage1>
    )
}