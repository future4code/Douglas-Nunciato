import axios from "axios"
import { BASE_URL } from '../constants/urls'
import { goToPagInicioAdm, goToLoginPage } from '../routes/coordinator'

export const sendApplication = (body, viagemId, clear) => {
    axios.post(`${BASE_URL}/trips/${viagemId}/apply`, body)
        .then(() => {
            alert("Aplicação enviada com sucesso!")
            clear()
        })
        .catch((err) => alert(err.response.message))
}

export const login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToPagInicioAdm(history)
        })
        .catch((err) => alert(err.response.data.message))
}

export const logout = (history) => {
    localStorage.removeItem("token")
    goToLoginPage(history)
}

export const deleteTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: { auth: localStorage.getItem("token") }
    })
    .then(() => {
        alert("Viagem deletada com sucesso!")
        getTrips()
    })
    .catch((err) => alert(err.response.data.message))
}

export const decideCandidate = (viagemId, candidateId, decision, getViagemDetails) => {
    const body = {
        approve: decision
    }

    axios.put(`${BASE_URL}/trips/${viagemId}/candidates/${candidateId}/decide`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Decisão registrada com sucesso!")
        getViagemDetails()
    })
    .catch((err) => alert(err.response.data.message))
}

export const createTrip = (body, clear) => {
    axios.post(`${BASE_URL}/trips`, body, {
        headers: {auth: localStorage.getItem("token")}
    })
    .then(() => {
        alert("Viagem adicionada com sucesso!")
        clear()
    })
    .catch((err) => alert(err.response.data.message))
}