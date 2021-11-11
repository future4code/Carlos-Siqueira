import React, { useEffect, useState } from "react";
import axios from 'axios'
import './Home.css';
import { useHistory, useParams } from "react-router-dom";
function Bike(){
const [bike,setBike] = useState({stolen_record:{date_stolen : 1}})
const params = useParams()
const bikeId = params.id
const history = useHistory()
const [date,setDate]=useState([])


useEffect(()=>{
axios.get(`https://bikeindex.org:443/api/v3/bikes/${bikeId}`).then((res)=>{
    setBike(res.data.bike)
    console.log(res.data.bike)
    setDate([new Date(res.data.bike.stolen_record.date_stolen*1000).toDateString(),new Date(res.data.bike.stolen_record.created_at*1000).toDateString()])
})

},[])





return(<div>
<h1 onClick={()=>history.push('/home')}>Labikes</h1>

{bike.title?<h1>{bike.title}</h1>:<p>Loading title</p>}
<p>Description:</p>
{bike.description?<p>{bike.description}</p>:<p>loading description...</p>}
<p>Stolen date:</p>
{date[0]?<span>{date[0]}</span>:<span>loading stolen date...</span>}
<p>Report date:</p>
{date[1]?<span>{date[1]}</span>:<span>loading report date...</span>}
{bike.stolen_record.location?<p>{bike.stolen_record.location}</p>:<p>loading location...</p>}

{bike.large_img?<img src={bike.large_img} />:<p>loading Image</p>}



</div>)}

export default Bike