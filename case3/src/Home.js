import React, { useEffect, useState } from "react";
import axios from 'axios'
import './Home.css';
import bikeSvg from './bike.svg'
import { useHistory } from "react-router-dom";
function Home(){
const [bikes,setBikes] = useState([])
const [page,setPage] = useState(1)
const [count, setCount] = useState(Number)
const history = useHistory();

useEffect(()=>{
axios.get(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10`).then((res)=>{
    setBikes(res.data.bikes)
})

axios.get(`https://bikeindex.org:443/api/v3/search/count`).then((res)=>{
setCount(res.data.stolen)
})

},[page])

return(<div id='home' >
<div id='header'>
<h1>Labikes</h1>
<p>um total de {count} bikes foram reportadas como roubadas</p>
</div>

<button onClick={()=>setPage(page-1)}>{'<<'}</button>

<div id='body'>


{bikes.map((el)=>{
    if(el.large_img){  return <div onClick={()=>{history.push(`/bike/${el.id}`)}}> <p>{el.title}</p><img  src={el.large_img} /> </div>

} else {
    return <div onClick={()=>{history.push(`/bike/${el.id}`)}}> <p>{el.title}</p> <img src={bikeSvg} className={el.frame_colors[0].split(',')[0]}/> </div>
}
})}


</div><button onClick={()=>setPage(page+1)}>{'>>'}</button>

</div>)
}

export default Home