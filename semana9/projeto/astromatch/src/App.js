
import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './card';
import { Head } from './header';
import { Matches } from './matches';
import axios from 'axios'

import styled from 'styled-components'
import logo from './logo.svg'
import Matchess from './matches.png'

const Logo = styled.img`
max-height: 80%;
grid-column-start: 3;
`

const Headerr = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
grid-template-rows: 50px;
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
     <div>
       <Headerr>
    <Logo onClick={matchessss} src={logo}/>
<Match onClick={matchesss} src={Matchess} />
</Headerr>
{      escolheTela()
}   
<button onClick={resetar} >Resetar</button>
 </div> 
  );
}

export default App;
