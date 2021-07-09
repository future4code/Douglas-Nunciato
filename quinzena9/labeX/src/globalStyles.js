import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
  }

  button {
    margin-bottom: 15px;
    height: 40px;
    padding: 0 20px;
    border-radius: 50%;
    border: none;
    color: white;
    font-size: 16px;
    background-color: orangered;
    min-width: 100px;

    &:hover{
      cursor: pointer;
      background-color: lightblue;
    }
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: lightyellow;
    margin: 0 0 15px 0;
  }

  select {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0 0 15px 0;
  }

  h1, h2, b {
    color: lightskyblue;
  }

  h1 {
    text-align: center;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h2 {
    text-align: center;

    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  p, li {
    color: lightgoldenrodyellow;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .corpoSite {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 90vh;
    padding: 4vh;
    background-image: url("https://assets.b9.com.br/wp-content/uploads/2021/01/star-wars-hotel-disney.jpg");
    overflow-y: auto;
      @media screen and (max-width: 620px) {
        width: 100vw;
        height: 98vh;
        padding: 10px;
      }
  }
`

export default GlobalStyle