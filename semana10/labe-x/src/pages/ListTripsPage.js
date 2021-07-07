import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Botao = styled.button`

border-radius: 8px;
`

const Botao2 = styled.button`

border-radius: 8px;

`

const Botoes = styled.div`
display: flex;
justify-content: center;
gap:30px;
margin: 30px;
`


const Appl = styled.div`
display: flex;
flex-direction: column;
`

const Appli = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
box-shadow: 1px 0 5px;
padding: 5px;
margin: 20px;
p{ margin:0px;
justify-content:center;}
`

const Title = styled.h1`

margin:auto;
`


 function ListTripsPage() {
let history = useHistory()
const [viagens,setViagens] = useState([])
 function handleClickRoute(rota) {
  history.push(`/${rota}`);
}

useEffect(()=>{if(!localStorage.getItem('token')){
  history.push('/login')
}
axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips`).then((res)=>{
console.log(res.data.trips)
setViagens(res.data.trips)
})

},[])


function renderViagens(){
 console.log('renderizando')
  viagens.map((el)=>{
     
    <Appl>
    <p>{el.name}</p>
    <p>{el.description}</p> 
    <p>{el.planet}</p>
    <p>{el.durationInDays}</p>
    <p>{el.date}</p>
     </Appl> 
    })
}
    return (
      <Appl>
        <Botoes>
<Botao onClick={() => handleClickRoute('') }>Voltar</Botao>  
<Botao2
onClick={() => handleClickRoute('app') }
>Inscrever-se</Botao2>  
</Botoes>
<Title onClick={renderViagens} >Lista de Viagens</Title>  
{ 
 viagens.map((el)=><Appli>
  <p>Nome : {el.name}</p>
  <p>Descrição : {el.description}</p>
  <p>Planeta : {el.planet}</p>
    <p> Duração : {el.durationInDays}</p>
    <p>Data : {el.date}</p>
  </Appli>)
}

  </Appl>
    );
  }
  
  export default ListTripsPage;
