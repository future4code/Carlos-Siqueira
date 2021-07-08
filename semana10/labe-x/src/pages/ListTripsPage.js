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
background: rgba(251,251,251,1);
border-radius: 10px;
align-items: flex-start;
box-shadow: 2px 2px 5px 0px;
padding: 2px 2px 2px 10px ;
margin: 15px;

&:hover{
  background: rgba(214,214,214,1);
}

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
 viagens.map((el)=><Appli onClick={() => history.push(`/app/${el.id}`)} >
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
