
import { useState } from 'react';
import './App.css';
import { Card } from './card';
import { Matches } from './matches';
import axios from 'axios'

import styled from 'styled-components'
import logo from './logo.svg'
import Matchess from './matches.png'


const Reset = styled.button`
grid-row-start: 4;
align-self: center;
grid-column-start: 2;
`

const Aplicativo = styled.div`
display: grid;
margin: auto;
grid-template-columns:1fr 400px 1fr ;
grid-template-rows: 1fr 700px 1fr 1fr;
`
const AppCard = styled.div`
display: flex;
flex-direction: column;
grid-row-start: 2;
grid-column-start:2;
`


const Logo = styled.img`
max-height: 80%;
grid-column-start: 3;
`

const Headerr = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
grid-template-rows: 50px;
grid-row-start: 1;
grid-column-start: 2;
`
const Match = styled.img`
max-height: 80%;
grid-column-start: 5;

`

function App() {
const [tela, setTela] = useState('cards')



function escolheTela(){
switch(tela){
  case 'cards':
    return (<Card></Card>);
    default:
    case 'matches':
      return (<Matches></Matches>)
}
}





function matchesss(){
 if(tela ==='cards'){
  setTela('matches')
     }else if(tela === "matches"){
      setTela('cards')

     }}
  
     function matchessss(){
      if(tela === "matches"){
        setTela('cards')
  
       }

     }


 function resetar(){
  axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/clear')
        .then(res => { setTela('cards')      })
}



  return (
    < Aplicativo>
       <Headerr>
    <Logo onClick={matchessss} src={logo} alt="astro-dev"/>
<Match onClick={matchesss} src={Matchess} alt="matches"/>
</Headerr>

<AppCard>
  <div></div>
{      escolheTela()
}<div></div>  </AppCard> 
<Reset onClick={resetar} >Resetar</Reset>
 
 </Aplicativo>
  );
}

export default App;
