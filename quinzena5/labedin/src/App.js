import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fcpq5-1.fna.fbcdn.net/v/t1.6435-9/73541642_3477356925615279_3109076510032527360_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=k8PZZjufduAAX-65DMW&_nc_ht=scontent.fcpq5-1.fna&oh=b1eabcc5efc268ceec719f953e26afe9&oe=60B5E216" 
          nome="Douglas" 
          descricao="Oi, eu sou o Douglas. Sou um alunos da Labenu. Estou na jornada de me tornar um desenvolvedor e tenho cada dia aprendido mais dessa área incrivel."
        />
        <CardPequeno
          email="  dougnunci@gmail.com"
          endereco="  Rua Do Gato Manco, 123 Cormir. Faerun - Forgotten Realms"
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQE-NjsRFpKxBQ/profile-displayphoto-shrink_800_800/0/1516495915360?e=1625702400&v=beta&t=t4iE6oX7pOUrA-iIkVu3hUjvbpbCjbobHyLrdaeBnYg" 
          nome="Desenvolvedor Frontend" 
          descricao="Sempre Buscando soluções inovadoras." 
        />
        
        <CardGrande 
          imagem="https://4.bp.blogspot.com/-DBVNWRTzd8o/V-oOIa1-Y3I/AAAAAAAAAdw/1EQXs2aDTdQCfxmM8TLv9NHltMJ2eG9WgCLcB/s1600/a11.png" 
          nome="Delfos" 
          descricao="Desorganizado, mais tudo está em seu devido lugar em minha mente." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
