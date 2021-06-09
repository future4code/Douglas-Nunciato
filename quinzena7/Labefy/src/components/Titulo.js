import React from 'react';
import styled from 'styled-components'

const DivTitulo = styled.div`
`


export default class Titulo extends React.Component {
    render () {
        return (
            <DivTitulo>
                <h3>Escolha uma PlayList</h3>
                       </DivTitulo>
        )
    }
}