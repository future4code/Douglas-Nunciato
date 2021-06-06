import React from 'react';
import axios from 'axios'
import Player from './Player'
import Carrossel from './Carrossel'
import { URL, header } from '../../Url'
import AddMusicas from '../AddMusicas';


export default class Midia extends React.Component {
    state = {
        Playlists: [],
        ListaDeMusicas: [],
        IdPlaylist: "",
        PagAddMusica: false,
    }
    componentDidMount(){
        this.ChamaPlaylist()
    }
    ChamaPlaylist= () =>{
        axios.get ( URL, header)
        .then((res)=>{
            this.setState({Playlists: res.data.result.list})
        })
        .catch((erro)=>{
            alert(erro)
        })
    }
    verMusica = (id) =>{
        axios.get(`${URL}/${id}/tracks`, header)
        .then((res)=>{
            this.setState({ListaDeMusicas: res.data.result.tracks})
            
        })
        this.setState({IdPlaylist: id})
       
       
    }
    deletarMusica= (id)=>{
        if (window.confirm("Deseja deletar essa musica mesmo?")){
            let idPlaylist = this.state.IdPlaylist
            axios.delete(`${URL}/${idPlaylist}/tracks/${id}`, header)
            .then((res)=>{
            })
            this.ChamaPlaylist()
            .catch((erro)=>{
             alert(erro)
            })
        }
    }
    deletarPlaylist = (id)=>{
        if (window.confirm("Deseja deletar essa Playlist mesmo?")){
            axios.delete(`${URL}/${id}`, header)
            .then((res)=> {
            console.log(res)
            })
            .catch((erro)=>{
             alert(erro)
            })
            this.ChamaPlaylist()
        }
    }
    mudarDePagina = () => {
        this.setState({PagAddMusica: !this.state.PaginaAddMusica})
    }
    render () {
    
        return (
        <div> <Carrossel
                    playlists={this.state.Playlists}
                    verMusica={this.verMusica}
                    />
            {!this.state.PagAddMusica?(
                <div>
                   
                    <Player
                    ListaDeMusicas={this.state.ListaDeMusicas}
                    deletarMusica={this.deletarMusica}
                    playlists={this.state.Playlists}
                    Idplaylist={this.state.IdPlaylist}
                    deletarPlaylist={this.deletarPlaylist}
                    mudarDePagina={this.mudarDePagina}
                    />
                </div>
            ):(
                <AddMusicas
                playlists= {this.state.Playlists}
                Idplaylist={this.state.IdPlaylist}
                /> 
            )}
          

        </div>
        )
    }
}