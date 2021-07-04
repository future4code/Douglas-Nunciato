export const goToPagHome = (history) => {
    history.push("/")
}

export const goToPagListaViagens = (history) => {
    history.push("/trips/list")
}

export const goToPagAplicacaoForm = (history) => {
    history.push("/trips/application")
}

export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToPagInicioAdm= (history) => {
    history.push("/admin/trips/list")
}

export const goToPagCriarViagem = (history) => {
    history.push("/admin/trips/create")
}

export const goToPagDetalhesViagem = (history, id) => {
    history.push(`/admin/trips/${id}`)
}
