import React, { useEffect, useState } from 'react';
import {DivPage1, BotoesCampo} from './style'
import Card from '../../components/Card/Card'
import axios from 'axios';
import { URL, header } from '../../constants/URL'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ClearIcon from '@material-ui/icons/Clear';




export default function Page1() {
    const [people, setPeople] = useState(undefined)
    const [animation, setAnimation] = useState("")

    const getPeople = () => {
        setAnimation("")
        if (people === null) {
            alert(
                "Acabou as pessoas para curiti."
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
        setAnimation("esquerda")

    }
    const onClickCurti = () => {
        choicePeople(true)
        setAnimation("direita")
    }

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <DivPage1>
            {people ?
               ( <>
                    <Card
                        animation={animation}
                        photo={people.photo}
                        name={people.name}
                        age={people.age}
                        bio={people.bio}
                    />
                    <BotoesCampo>
                        <ClearIcon className="botaoNao" fontSize="large" color="secondary" onClick={onClickNao}>NAO</ClearIcon> 
                        <CheckCircleIcon className="botaoCurti" fontSize="large" onClick={onClickCurti}>Curtir</CheckCircleIcon>
                    </BotoesCampo>
                </>) : <p>Carregando ...</p>
            }
        </DivPage1>
    )
}