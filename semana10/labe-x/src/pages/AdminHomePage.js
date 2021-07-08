
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import lixoImg from '../lixo.png'

const Appl = styled.div``
const Botoes = styled.div``
const Viagens = styled.div``

const Lixin = styled.img`
height:70%;
margin: 5px;
padding: 5px;


&:hover{
  background: rgba(214,214,214,1);
}
`
const Trip = styled.div`
display:flex;
justify-content:space-between;
height:30px;
margin: 10px;
background: rgba(251,251,251,1);
border-radius: 10px;
align-items: center;
box-shadow: 2px 2px 5px 0px;

p{margin:5px;
width: 90%;
  &:hover{
  background: rgba(214,214,214,1);
}
}
`


function AdminHomePage() {
  const [viagens,setViagens] = useState([])
  let count = 0
  useEffect(()=>{if(!localStorage.getItem('token')){
    history.push('/login')
  }
axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips`).then((res)=>{
  console.log(res.data.trips)
  setViagens(res.data.trips)
})

},[])

  function logout() {
    localStorage.removeItem('token')
    history.push('/login')
  }
  const history = useHistory()
  function newTrip(){
    history.push('new')
  }
  function voltar(){
  history.push('/')
  }


  function deleteTrip(key){
    const header = {
      'auth' : localStorage.getItem('token')
    }
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips/${key}`,{
    headers: header}).then((res)=>{
history.go(0)
}).catch((err)=>console.log(err))
  }
    return (

      <Appl>
      <h1>Painel Administrativo</h1>
     <Botoes> <button onClick={voltar}>Voltar</button>
      <button onClick={newTrip} >Criar Viagem</button>
      <button onClick={logout} >Logout</button>
      </Botoes>
      <Viagens>
        {viagens.map((el)=>{
          return <Trip  key={el.id}>
            <p onClick={() => history.push(`/trip/${el.id}`)} >{el.name}</p>
<Lixin onClick={() => deleteTrip(el.id)} src={lixoImg} alt='excluir'/>
            </Trip>
        })}
      </Viagens>
      </Appl>
    );
  }
  
  export default AdminHomePage;
  