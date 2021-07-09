import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import createHistory from 'history/createBrowserHistory'


import styled from 'styled-components'

const Red = styled.button`
&:hover{
  color: red;
}
`

const Green = styled.button`
&:hover{
  color: green;
}
`


const Appl = styled.div`
display:flex;
flex-direction:column;
background: rgba(251,251,251,1);
border-radius: 10px;
align-items: flex-start;
box-shadow: 2px 2px 5px 0px;
margin: 15px;
p{
  margin: 1px;
}

`
const Viagem = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 20px;
gap:1px;

p{
  margin:3px;
}

button{
  background: gray;
color: white;
font-weight: 800;
border-radius: 8px;
width: 142px;
height: 32px;
margin:3px;}
`

const Appli = styled.div`
display:flex;
button{
  background: gray;
color: white;
font-weight: 800;
border-radius: 8px;
width: 142px;
height: 32px;
margin:10px;}

`

function TripDetails() {
  const histori = createHistory();
  const history = useHistory()

   const params = useParams()
   const id = params.id
  console.log(id)
const [trip,setTrip] = useState({candidates:[],approved:[]})
useEffect(()=>{
  const header = {
    'auth' : localStorage.getItem('token')
  }
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trip/${id}`,{
    headers: header}).then(
    (res) => {setTrip(res.data.trip)
    }
  ).catch((err)=> console.log(err))
},[id])
 


function aprovarCandidato(eid){
  const header = {
    'Content-Type': 'application/json',
    'auth' : localStorage.getItem('token')
  }

  const bodi = {
    approve:true
  }
  axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips/${id}/candidates/${eid}/decide`,bodi,{headers:header}).then((res)=> histori.go(0))
 }


 function rejeitarCandidato(eid){
  const header = {
    'Content-Type': 'application/json',
    'auth' : localStorage.getItem('token')
  }

  const bodi = {
    approve:false
  }
  axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trips/${id}/candidates/${eid}/decide`,bodi,{headers:header}).then((res)=> histori.go(0)  )
 }


    return (
      <div>
        <Viagem>
        <h1>{trip.name}</h1>
      <p>Nome : {trip.name}</p>
      <p>Descrição : {trip.description}</p>
      <p>Planeta : {trip.planet}</p>
      <p>Duração : {trip.durationInDays}</p>
      <p>Data : {trip.date}</p>
<button onClick={() => history.push('/admin')}>Voltar</button>
</Viagem>
<h3 >Candidatos Pendentes</h3>
{trip.candidates.map((el)=> <Appl><p>Nome : {el.name}</p><p>Profissão : {el.profession}</p><p>País : {el.country}</p><p>Idade : {el.age}</p><p>Texto de Candidatura : {el.applicationText}</p><Appli><Red onClick={() => rejeitarCandidato(el.id) } >Rejeitar</Red><Green onClick={() => aprovarCandidato(el.id) }>Aprovar</Green></Appli></Appl>)} 
<h3>Candidatos Aprovados</h3>
{trip.approved.map((el)=> <Appl><p>Nome : {el.name}</p><p>Profissão : {el.profession}</p><p>País : {el.country}</p><p>Idade : {el.age}</p><p>Texto de Candidatura : {el.applicationText}</p></Appl>)} 
      </div>
    );
  }
  
  export default TripDetails;
  