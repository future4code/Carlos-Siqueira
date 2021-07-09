import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


function TripDetails() {
   const params = useParams()
  console.log('params')
const [trip,setTrip] = useState()
useEffect(()=>{
  const header = {
    'auth' : localStorage.getItem('token')
  }
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/trip/${params}`,{
    headers: header}).then(
    (res) => {setTrip(res.data.trip)
    }
  ).catch((err)=> console.log(err))
},[params])
 
    return (
      <div>
         <p>{trip.name}</p>
        <p>{trip.description  }</p>
        <p>{trip.planet}</p>
        <p>{trip.durrationInDays}</p>
        <p>{trip.date}</p>
 
 <p>oi</p>
      </div>
    );
  }
  
  export default TripDetails;
  