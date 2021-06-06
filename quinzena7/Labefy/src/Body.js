import React from 'react';
import styled from 'styled-components'
import Hearder from './components/Header'
import Titulo from './components/Titulo'
import Midia from './components/paginas/midia/Midia'
import AddPlayList from './components/paginas/AddPlayList'
import AddMusicas from './components/paginas/AddMusicas'


const DivBody = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    grid-column: 2 / 3;
    padding: 10px;
    overflow-y: scroll;
    max-height: 100vh;
    @media screen and (max-width: 620px) {
        grid-column: 1 / -1;
  }
`
export default class Body extends React.Component {
    state={
        pagina: "home",
        botaoHome: true
    } 
    mudaBotaoHome = () =>{
        this.setState({botaoHome : true})
    }

     
    IrparaHome = () =>{
        this.setState({botaoHome: "true"})
        this.setState({pagina: "home"})
            }
    IrparaAdd = () =>{
        this.setState({pagina: "adicionar"})
        this.setState({botaoHome: false})
    }
   
    render() {
        return (
            <DivBody>
                <Hearder 
                    botaoHome={this.state.botaoHome}
                    IrparaHome={this.IrparaHome}
                    IrparaAdd={this.IrparaAdd}
                    pagina={this.state.pagina}

                />
                <Titulo />
              {this.state.pagina === "adicionar" && (<AddPlayList/>)}
              {this.state.botaoHome && (<Midia mudabotaoHome={this.mudaBotaoHome}/>)}
            
            </DivBody>
        )
    }
}