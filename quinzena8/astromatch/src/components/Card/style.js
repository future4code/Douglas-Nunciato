import styled from 'styled-components'


export const DivCard= styled.div`
    font-family: 'Montserrat', sans-serif;
    background-color: black;
    background-image: url('https://i.picasion.com/pic91/5125a093a257464d376ee30421a4033d.gif');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    display: flex;
    flex-direction: column;
    padding: 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    
    animation:   ${props => {
        if (props.animation === "direita"){
        return "direita 0.5s  0s"
        }else if (props.animation === "esquerda"){
        return "esquerda 0.5s 0s"
        }else {
        return ""
        }
        }};
        @keyframes direita {
        from{
        transform: translate(0) rotate(0);
        }
        to {
        transform: translate(200px) rotate(45deg);
        }
        }
        @keyframes esquerda {
        from{
        transform: translate(0) rotate(0);
        }
        to {
        transform: translate(-200px) rotate(-45deg);
        }
        }
        /* @media screen and (max-width: 620px) {

    } */
    `
    export const NomePessoa= styled.h4`
        color: lightskyblue;
        align-self: center;
        
    `
    export const Descricao = styled.p`
        color: white;
        align-self: center;

    `
    export const PhotoAPI = styled.img`
        width: auto;
        height: 35vh;
        object-fit: scale-down;
    `
    export const DivImg= styled.div`
        display: flex;
        justify-content:center;
    
    /* @media screen and (max-width: 620px) {

  } */
`