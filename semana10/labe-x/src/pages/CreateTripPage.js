
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Appl = styled.div`
display:flex;
flex-direction:column;`
const Botoes = styled.div`
display: flex;`



function CreateTripPage() {
const [nome,setNome] = useState('')
const [planeta,setPlaneta] = useState('1')
const [data,setData] = useState('')
const [descricao,setDescricao] = useState('')
const [duracao,setDuracao] = useState(Number)

function handleNome (event){
  setNome(event.target.value)
}
function handlePlaneta(event){
  setPlaneta(event.target.value)
}
function handleData(event){
  setData(event.target.value)
}
function handleDescricao(event){
  setDescricao(event.target.value)
}
function handleDuracao(event){
  setDuracao(event.target.value)
}





  const history = useHistory()
  function createTrip(){
    const body = {

      "name": nome,
        "planet": planeta,
        "date": data,
        "description": descricao,
        "durationInDays": duracao
    }

    const header = {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips',body,{
    headers: header}).then((res)=>{
      alert('viagem criada com sucesso, codigo: '+res.status)
    history.push('new')
  }
    ).catch((err) => console.log(err))
  }
  function voltar(){
  history.push('/admin')
  }
    return (
      <Appl>
        <h1>Criar Viagem</h1>
        
        <input placeholder='Nome'
        value={nome} name='' onChange={handleNome} ></input>

        <select placeholder='Escolha o planeta' value={planeta} name='' onChange={handlePlaneta}>
        <option value='1' disabled>Escolha o planeta</option>       
    
        <option>Venus</option>
        <option>Lua</option>
        <option>Europa</option>
        <option>Jupter</option>
       <option>Marte</option>    

</select>
<input type='date' value={data} name='' onChange={handleData} placeholder='mm/dd/yyy' ></input>
<input value={descricao} name='' onChange={handleDescricao} placeholder='descricao' ></input>
<input value={duracao} name='duration' type="number" onChange={handleDuracao} placeholder='duracao em dias' ></input>

  <Botoes> <button onClick={voltar}>Voltar</button>
      <button onClick={createTrip} >Criar</button>
      </Botoes>

      </Appl>
    );
  }
  
  export default CreateTripPage;
  