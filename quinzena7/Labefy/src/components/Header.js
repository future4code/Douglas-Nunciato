import React from 'react';
import styled from 'styled-components'

const DivHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 5px;
    /* @media screen and (max-width: 620px) {

  } */
`
const HeaderH1 = styled.h1`
    
    border-radius: 50px;
    background-color: darkgreen;
    padding: 15px 22vw 15px 22vw;
    cursor: pointer;
    align-self: center;
`

export default class Header extends React.Component {
    render () {
        return (
            <DivHeader>
                <HeaderH1 onClick={this.props.IrparaHome}>Labefy</HeaderH1>

                {this.props.botaoHome ? (<button onClick={this.props.IrparaAdd}>Adicionar PlayList</button>
                     
                ):(<button onClick={this.props.IrparaHome}>HOME</button>)}

              
              
               
                
            </DivHeader>
            )
    }
}