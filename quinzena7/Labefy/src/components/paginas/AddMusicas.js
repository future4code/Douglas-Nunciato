import React from 'react';
import styled from 'styled-components'
import { header, URL } from '../Url'
import axios from 'axios'


const DivAddMusicas = styled.div`
    background: rgba(0,0,0,0.5);
    display: flex;
    padding: 2px;
    flex-direction: column;
    align-items: flex-end;
`
const TituloMusica = styled.div`
    display: flex;
    align-self: center;
`
const ButtonAdd = styled.button`
    border-radius: 20px;
    width: 40%;
    padding: 1px;
    margin: 1px;
`
const InputsAddMusicas = styled.input`
    width: 40vw;
    margin: 1px;
    @media screen and (max-width: 620px) {
        width: 60vw;
  }
`

export default class AddMusicas extends React.Component {
    state = {
        musica: "",
        artista: "",
        url: "",
    }


    inputMusica = (event) => {
        this.setState({ musica: event.target.value })
    }

    inputArtista = (event) => {
        this.setState({ artista: event.target.value })
    }
    inputUrl = (event) => {
        this.setState({ url: event.target.value })
    }

    DarEnter = (event) => {
        if (event.keyCode === 13) {
            this.adicionaMusica()
        }
    }


    adicionaMusica = () => {
        const body =
        {
            name: this.state.musica,
            artist: this.state.artista,
            url: this.state.url,
        }
        const id = this.props.Idplaylist

        axios.post(`${URL}/${id}/tracks`, body, header)
            .then((res) => {
                alert(`Música adicionada`);
                this.setState({ musica: "" });
                this.setState({ artista: "" });
                this.setState({ url: "" });


            })
            .catch((erro) => {
                console.log(erro)
            })
    }


    render() {

        const playlist = this.props.playlists.map((playlist) => {
            if (playlist.id === this.props.Idplaylist) {
                return <TituloMusica>
                    <h4>{playlist.name}</h4>
                </TituloMusica>

            }
        })

        return (
            <DivAddMusicas>
                {playlist}
                <label>Nome da Musica :
                    <InputsAddMusicas
                        value={this.state.musica}
                        onChange={this.inputMusica} 
                    />
                </label>
                <label>Nome do Artista :
                    <InputsAddMusicas 
                        value={this.state.artista}
                        onChange={this.inputArtista} 
                    />
                </label>
                <label> _____URL_____:
                    <InputsAddMusicas value={this.state.url}
                        onChange={this.inputUrl}
                        onKeyDown={this.DarEnter}
                    />
                </label>
                <ButtonAdd onClick={this.adicionaMusica}>Adicionar</ButtonAdd>
            </DivAddMusicas>
        )
    }
}