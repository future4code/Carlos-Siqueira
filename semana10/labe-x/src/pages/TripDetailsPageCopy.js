import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

function TripDetails() {
  const history = useHistory()

   const params = useParams()
   const id = params.id
  console.log(id)
const [trip,setTrip] = useState({})
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
 
function candidatos(){
  if(trip.name){
  trip.candidates.map((el)=>{
    return <p> {el}</p>
  })}
}

function aprovados(){
  if(trip.name){
  trip.approved.map((el)=>{
    return <p> {el}</p>
  })}
}

    return (
      <div>
        <h1>{trip.name}</h1>
      <p>Nome : {trip.name}</p>
      <p>Descrição : {trip.description}</p>
      <p>Planeta : {trip.planet}</p>
      <p>Duração : {trip.durationInDays}</p>
      <p>Data : {trip.date}</p>
<button onClick={() => history.push('/admin')}>Voltar</button>
<h3>Candidatos Pendentes</h3>

{candidatos()}

<h3>Candidatos Aprovados</h3>
{aprovados()}
      </div>
    );
  }
  
  export default TripDetails;
  