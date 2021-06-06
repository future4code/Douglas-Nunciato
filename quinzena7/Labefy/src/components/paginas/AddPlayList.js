import React from 'react';
import axios from 'axios';
import { URL, header } from '../Url'


export default class AddPlayList extends React.Component {
    state = {
        InputPlaylist: ""
    }
    AdicionarPlayList = (event) => {
        this.setState({InputPlaylist: event.target.value})
    }
    DarEnter = (event) => {
        if (event.keyCode === 13) {
            this.CriarPlayList()
        }
    }
    CriarPlayList = () => {
        const body= {name: this.state.InputPlaylist}
        axios.post( URL, body, header)
        .then(()=>{
            alert("PlayLista Adicionada")
           
        })
        .catch((erro)=>{
            alert(erro)
        })
    }
    
    render () {
        console.log(this.state.InputPlaylist)
        return (
            <div>
                <input type="text" 
                    placeholder={"Titulo da Playlist"} 
                    value={this.state.InputPlaylist}
                    onKeyDown= {this.DarEnter}
                    onChange={this.AdicionarPlayList}
                />
                <button onClick={this.CriarPlayList}>ADD</button>
            </div>
        )
    }
}