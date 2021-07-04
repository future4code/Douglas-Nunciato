import React from 'react'
import { goToPagListaViagens, goToLoginPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import { ButtonsContainer } from "./styled"

const PagHome = () => {
    const history = useHistory()
    return (
        <>
            <h1>LabeX</h1>
            <ButtonsContainer>
                <button onClick={() => goToPagListaViagens(history)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(history)}>Área de Admin</button>
            </ButtonsContainer>
        </>
    )
}

export default PagHome
