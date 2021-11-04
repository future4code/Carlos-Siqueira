import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
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
   let id =''
   let idtrip
  const history = useHistory()
const [trips,setTrips] = useState([])
  


  useEffect(()=>{
    
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips`).then(
      (res) => {setTrips(res.data.trips)
        console.log(trips)
      }
    ).catch((err)=> console.log(err))
  },[])

 function handleClickRoute(rota) {
  history.push(`/${rota}`);
}


const {form, onChange} = useForm({trip:'',name:'',age:'',applicationText:'',profession:'',country:''})




function handleForm(event){
  const header = {
    'Content-Type': 'application/json',
  }
  event.preventDefault()
idtrip = trips.filter((e)=> {
 return form.trip === e.name
})
console.log('idtrip',idtrip)
id = idtrip[0].id
  axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips/${id}/apply`,form,header).then((res) => console.log('deu',res)).catch((err)=>console.log(err))
}



    return (
      <Appl>
        <Title>Inscreva-se para uma viagem</Title>  
        <form onSubmit={handleForm} >
<select name={'trip'} value={form.trip} onChange={onChange}  >
<option value=''selected disabled >Escolha a Viagem</ option>  

  {trips.map((el,i)=> {
     return <option key={el.id}>{el.name}</option>
}
)}
 

</select>

<input name={'name'} value={form.name} onChange={onChange}  placeholder='Nome' ></input>
<input name={'age'} value={form.age} onChange={onChange}  placeholder='Idade' ></input>
<input name={'applicationText'} value={form.applicationText} onChange={onChange}  placeholder='Texto de Candidatura' ></input>
<input name={'profession'} value={form.profession} onChange={onChange}  placeholder='Profissão' ></input>
<select name={'country'} value={form.country} onChange={onChange}  >

<option value=''selected disabled >Escolha o País</ option>  
{paises.map((el)=> <option>{el}</option>)}


</select>

<Botao>Enviar</Botao>
</form>
<Botao onClick={() => handleClickRoute('trips') }>Voltar</Botao>  

  </Appl>
    );
  }
  
  export default ApplicationFormPage;
