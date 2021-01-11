import React from 'react';
import './App.css';
import Perfil from "./components/foto.jpeg"
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno1 from "./components/CardPequeno1/CardPequeno1";
import CardPequeno2 from "./components/CardPequeno2/CardPequeno2"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil}
          nome="Rodrigo" 
          descricao="Oi, eu sou o Rodrigo. Sou um dos alunos da turma Epps da Labenu. Sou apaixonado por tecnologia, e web development é uma delas!" 
          />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      
        <CardPequeno1
         imagem ="https://www.flaticon.com/premium-icon/icons/svg/3059/3059474.svg"
         texto="Email: rsouzawork95@gmail.com"/>
         
        <CardPequeno2
        imagem ="https://www.flaticon.com/premium-icon/icons/svg/1009/1009850.svg"
        texto="Insira seu endereço: Rua Quiroã, 22, apt 201, RJ"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
