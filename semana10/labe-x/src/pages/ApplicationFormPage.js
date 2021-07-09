import styled from 'styled-components'
import {useHistory, useParams} from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from 'react';
import txt from './paises.txt'
import useForm from '../hooks/useForm.js'

let paises =[]
axios(txt).then(res => paises = res.data.split('\n'))
            

const Botao = styled.button`
align-self: center;
justify-self:center;
 background: gray;
color: white;
font-weight: 800;
border-radius: 8px;
width: 142px;
height: 32px;
`



const Appl = styled.div`
display: flex;
flex-direction: column;
margin: 10vw;
gap:10px;

form{
  display: flex;
  flex-direction: column;
  gap:1vh;
}
`

const Title = styled.h1`
margin:auto;
`


 function ApplicationFormPage() {
  const history = useHistory()
const [trip,setTrip] = useState({})
  const params = useParams()
  const id = params.id


  useEffect(()=>{
    const header = {
      'auth' : localStorage.getItem('token')
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trip/${id}`,{
      headers: header}).then(
      (res) => {setTrip(res.data.trip)
        console.log(trip)
      }
    ).catch((err)=> console.log(err))
  },[id])

 function handleClickRoute(rota) {
  history.push(`/${rota}`);
}

function handleForm(event){
  const header = {
    'Content-Type': 'application/json',
  }
  event.preventDefault()
  form.trip = trip.name
  console.log(form,trip.id)
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips/${trip.id}/apply`,form,header).then((res) => console.log('deu',res)).catch((err)=>console.log(err))
}

const {form, onChange} = useForm({trip:undefined,name:'',age:'',applicationText:'',profession:'',country:''})
    return (
      <Appl>
        <Title>Inscreva-se para a viagem {trip.name} </Title>  
        <form onSubmit={handleForm} >
        <input disabled  placeholder={trip.name} ></input>
<input name={'name'} value={form.name} onChange={onChange} placeholder='Nome' ></input>
<input name={'age'} value={form.age} onChange={onChange}  placeholder='Idade' ></input>
<input name={'applicationText'} value={form.applicationText} onChange={onChange} placeholder='Texto de Candidatura' ></input>
<input name={'profession'} value={form.profession} onChange={onChange}  placeholder='Profissão' ></input>
<select name={'country'} value={form.country} onChange={onChange}  >

<option value=''selected disabled >Escolha o País</ option>       

{paises.map((el)=> <option>{el}</option>)}


</select>

<Botao
>Enviar</Botao>  

</form>

<Botao onClick={() => handleClickRoute('trips') }>Voltar</Botao>  

  </Appl>
    );
  }
  
  export default ApplicationFormPage;
