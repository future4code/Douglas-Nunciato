import React from 'react';
import styled from 'styled-components'

const DivPlayer = styled.div`
    background: rgba(0,0,0,0.5);
    display: flex;
    padding: 2px;
    flex-direction: column;
`

export default class Player extends React.Component {
 
    render () {
        const nomeDaPlaylist = this.props.playlists.map((playlist)=>{
            if (playlist.id === this.props.Idplaylist){
                return <div>
                    <h4>{playlist.name}</h4>
                    <button onClick={()=>this.props.deletarPlaylist(playlist.id)}>Excluir PlayList </button>
                    <button onClick={this.props.mudarDePagina}>Adicionar Música</button>
                </div>
                
            }
        })
        return (
            <DivPlayer>
                {nomeDaPlaylist}
                {this.props.ListaDeMusicas.map((musica)=>{
                    
                    return (
                        <div>
                            <h4>{musica.name}</h4>
                            <h6>{musica.artist}</h6>
                            <audio src={musica.url} controls/>
                            <button onClick={()=>this.props.deletarMusica(musica.id)}>Excluir Musica </button>
                        
                        </div>
                    )
                })}
                
            </DivPlayer>
        )
    }
}