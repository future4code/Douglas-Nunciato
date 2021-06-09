import React from 'react';


export default class Carrossel extends React.Component {
   
    render () {
    return (
        <div>
            {this.props.playlists.map((playlist)=>{
                return (
                    <button onClick={()=>{this.props.verMusica(playlist.id)}}>{playlist.name}</button>
                )
            })}
        </div>
    )
    }
}