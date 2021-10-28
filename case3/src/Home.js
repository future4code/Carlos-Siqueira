import React, { useEffect, useState } from "react";
import axios from 'axios'
import './Home.css';
import bikeSvg from './bike.svg'
function Home(){
const [bikes,setBikes] = useState([])
const [page,setPage] = useState(1)
useEffect(()=>{
axios.get(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10`).then((res)=>{
    setBikes(res.data.bikes)
})

},[page])

return(<div id='home' >
<button onClick={()=>setPage(page-1)}>{'<<'}</button>


{bikes.map((el)=>{
    if(el.large_img){  return <img src={el.large_img} />
} else {
    return <img src={bikeSvg} className={el.frame_colors[0].split(',')[0]}/>
}
})}

<button onClick={()=>setPage(page+1)}>{'>>'}</button>


</div>)
}

export default Home