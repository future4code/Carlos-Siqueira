import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import pic from './images/eu.jpeg';
import tesla from './images/Tesla_T_symbol.svg.png';
import spacex from './images/spacex.png';
import google from './images/google.png';
import email from './images/email.png';
import endereco from './images/endereco.png';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={pic}
          nome="Carlos" 
          descricao="Oi, eu sou o Carlos sou um aluno da Labenu. Adoro programar e pretendo me especializar em back-end."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


<div>

<CardPequeno
imagem={email} 
texto="Email: carlosfelipe@tesla.com"
/>
<br></br>
<CardPequeno
imagem={endereco} 
texto="Endereço: 99 Van Ness Ave San Francisco, CA 94109."
/>

</div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={tesla} 
          nome="Tesla" 
          descricao="Desenvivolvimento do Autopilot" 
        />
        
        <CardGrande 
          imagem={spacex} 
          nome="SpaceX" 
          descricao="Desenvolvimento do trem de pouso autonomo" 
        />

<CardGrande 
          imagem={google} 
          nome="Google" 
          descricao="Desenvolvimento de softwares do computador quantico do Google" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href="instagram.com/carl0sfelipe" ><ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        /> </a>       

<a href="twitter.com/carl0sfelipebtc" ><ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />   </a>      
      </div>
    </div>
  );
}

export default App;
