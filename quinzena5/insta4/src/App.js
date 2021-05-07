import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const novosDados = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state={
    pessoa:[
      {
      nomeUsuario: 'paulinha',
      fotoUsuario:'https://picsum.photos/50/50',
      fotoPost:'https://picsum.photos/200/150'
    },
      {
      nomeUsuario:'lucas',
      fotoUsuario:'https://picsum.photos/50/40',
      fotoPost:'https://picsum.photos/200/140'
    },
      {
      nomeUsuario:'ana',
      fotoUsuario:'https://picsum.photos/40/60',
      fotoPost:'https://picsum.photos/150/100'
    }
  ],
  valorInputNomeUsuario:"",
  valorInputFotoUsuario:"",
  valorInputFotoPostagem:""
  }
  adicionaPost = () => {
    const novaPessoa = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPostagem
    };
    const novoPost = [...this.state.pessoa, novaPessoa];


    this.setState({ pessoa: novoPost });
  };

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPostagem = (event) => {
    this.setState({ valorInputFotoPostagem: event.target.value });
  };



  render (){
    const listaDePostagem = this.state.pessoa.map((pessoa)=>{

      return(

        <Post
          nomeUsuario={pessoa.nomeUsuario}   
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />

      )
    })

    return (
      <MainContainer>
        <div>
        <input     
        value={this.state.valorInputNomeUsuario}
        onChange={this.onChangeInputPessoa}
        placeholder={"Nome"}
       />
       <br></br>
        <input
         value={this.state.valorInputFotoUsuario}
         onChange={this.onChangeInputFotoPerfil}
         placeholder={"Foto Perfil"}
       />
       <br></br>
       <input
         value={this.state.valorInputFotoPostagem}
         onChange={this.onChangeInputFotoPostagem}
         placeholder={"Foto Postagem"}
         />
         <br></br>
         <button onClick={this.adicionaPost}>Postar</button>
          </div>
        <br></br>
        {listaDePostagem}


      </MainContainer>
    );
  }
}

export default App;