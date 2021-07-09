import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PagHome from '../pages/PagHome/PagHome'
import PagListaViagens from '../pages/PagListaViagens/PagListaViagens'
import LoginPage from '../pages/LoginPage/LoginPage'
import PagAplicacaoForm from '../pages/PagAplicacaoForm/PagApplicacaoForm'
import PagInicioAdm from '../pages/PagInicioAdm/PagInicioAdm'
import PagCriarViagem from '../pages/PagCriarViagem/PagCriarViagem'
import PagDetalhesViagem from '../pages/PagDetalhesViagem/PagDetalhesViagem'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PagHome} />
                <Route exact path="/trips/list" component={PagListaViagens} />
                <Route exact path="/trips/application" component={PagAplicacaoForm} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/admin/trips/list" component={PagInicioAdm} />
                <Route exact path="/admin/trips/create" component={PagCriarViagem} />
                <Route exact path="/admin/trips/:id" component={PagDetalhesViagem} />
                <Route>
                    <div>Erro 404 - Página não encontrada</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router