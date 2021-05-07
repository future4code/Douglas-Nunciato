import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSalvar} from '../IconeSalvar/IconeSalvar'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeBandeiraBranca from '../../img/bandeiraBranca.svg'
import iconeBandeiraPreta from '../../img/bandeiraPreta.svg'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvo: false,
    contador: 0,

  };



  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo
    })
    if (this.state.contador === 0){
      this.setState({
        salvo: true,
        contador: this.state.contador +1,
        })
     } else {
       this.setState({
         salvo: false,
         contador: this.state.contador -1,
       })
     }
    }


  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })

    if (this.state.numeroCurtidas === 0) {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1,
      })
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1,
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });

  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }
    let iconeSalvar;
    if (this.state.salvo){
      iconeSalvar = iconeBandeiraPreta;
    } else {
      iconeSalvar = iconeBandeiraBranca;
    }
    let componenteComentario;
    if (this.state.comentando) {
      componenteComentario = 
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />
          <IconeSalvar
            icone={iconeSalvar}
            onClickInfo={this.onClickSalvar}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />
        </PostFooter>
        {componenteComentario}
      </PostContainer>
    );
  }
}

export default Post