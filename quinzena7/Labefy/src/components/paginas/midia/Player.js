import React from 'react';
import styled from 'styled-components'

const DivPlayer = styled.div`
    background: rgba(0,0,0,0.5);
    display: flex;
    padding: 2px;
    flex-direction: column;
`
const DivPlaylistMusica = styled.div`
    padding: 2px;
`
const H2Player = styled.h2`
   display: flex;
   justify-content: center;
`

const DivMusicaNome = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2px;
`

export default class Player extends React.Component {
 
    render () {
        const nomeDaPlaylist = this.props.playlists.map((playlist)=>{
            if (playlist.id === this.props.Idplaylist){
                return <DivPlaylistMusica>
                    <H2Player>{playlist.name}</H2Player>
                    <div>
                        <button onClick={()=>this.props.deletarPlaylist(playlist.id)}>Excluir PlayList </button>
                        <button onClick={this.props.mudarDePagina}>Adicionar Música</button>
                    </div>
                </DivPlaylistMusica>
                
            }
        })
        return (
            <DivPlayer>
                {nomeDaPlaylist}
                {this.props.ListaDeMusicas.map((musica)=>{
                    
                    return (
                        <div>
                            <DivMusicaNome>
                                <h4>{musica.name}</h4>
                                <h6>{musica.artist}</h6>
                            </DivMusicaNome>
                            <audio src={musica.url} controls/>
                            <button onClick={()=>this.props.deletarMusica(musica.id)}>Excluir Musica </button>
                        
                        </div>
                    )
                })}
                
            </DivPlayer>
        )
    }
}