import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import { goToPagCriarViagem, goToPagHome } from '../../routes/coordinator'
import { logout } from '../../services/requests'
import { AdminHomeScreenContainer, ButtonsContainer } from "./styled"
import useRequestData from '../../hooks/useRequestData'
import CartaViagemAdm from "../../components/CartaViagemAdm/CartaViagemAdm"



const PagInicioAdm = () => {
    useProtectedPage()
    const history = useHistory()
    const [tripsData, gettrips] = useRequestData("/trips", {})

    const tripsList = tripsData.trips && tripsData.trips.map((t) => {
        return <CartaViagemAdm key={t.id} name={t.name} id={t.id} gettrips={gettrips} />
    })

    return (
        <AdminHomeScreenContainer>
            <h1>Painel Administrativo</h1>
            <ButtonsContainer>
                <button onClick={() => goToPagHome(history)}>Voltar</button>
                <button onClick={() => goToPagCriarViagem(history)}>Criar Viagem</button>
                <button onClick={() => logout(history)}>Logout</button>
            </ButtonsContainer>
            {tripsList && tripsList.length > 0 ? tripsList : <p>Caregando...</p>}
        </AdminHomeScreenContainer>
    )
}

export default PagInicioAdm
