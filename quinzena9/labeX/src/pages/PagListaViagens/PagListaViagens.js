import React from 'react'
import CartaViagem from "../../components/CartaoViagem/CartaViagem"
import useRequestData from "../../hooks/useRequestData"
import { goToPagHome, goToPagAplicacaoForm } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import { ButtonsContainer, ListScreenContainer } from "./styled"

const PagListaViagens = () => {
    const [tripsData] = useRequestData("/trips", {})
    const history = useHistory()

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <CartaViagem key={t.id} trip={t} />
    })

    return (
        <ListScreenContainer>
            <ButtonsContainer>
                <button onClick={() => goToPagHome(history)}>Voltar</button>
                <button onClick={() => goToPagAplicacaoForm(history)}>Inscrever-se</button>
            </ButtonsContainer>
            <h1>Lista de Viagens</h1>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Carregando...</p>}
        </ListScreenContainer>
    )
}

export default PagListaViagens