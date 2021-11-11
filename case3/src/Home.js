import React, { useEffect, useState } from "react";
import axios from 'axios'
import './Home.css';
import bikeSvg from './bike.svg'
import back from './back.png'
import next from './next.png'
import styled from 'styled-components'

import { useHistory } from "react-router-dom";
function Home(){
const [bikes,setBikes] = useState([])
const [page,setPage] = useState(1)
const [pesquisa,setPesquisa] = useState('')

const [count, setCount] = useState(Number)
const history = useHistory();

const Botao = styled.img`
&:hover{
    cursor: pointer;
}
`


const Botoes = styled.div`

display: flex;
justify-content: space-between;
`


useEffect(()=>{
axios.get(`https://bikeindex.org:443/api/v3/search?page=${page}&per_page=10`).then((res)=>{
    setBikes(res.data.bikes)
})

axios.get(`https://bikeindex.org:443/api/v3/search/count`).then((res)=>{
setCount(res.data.stolen)
})

axios.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=10&query=${pesquisa}&stolenness=stolen
`).then((res)=>{
    setBikes(res.data.bikes)
})
},[page])


useEffect(()=>{

    axios.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=10&query=${pesquisa}&stolenness=stolen
`).then((res)=>{
    setBikes(res.data.bikes)
})
},[pesquisa])

return(<div id='home' >
<div id='header'>
<h1>Labikes</h1>
<p>um total de {count} bikes foram reportadas como roubadas</p>
</div>
<input value={pesquisa} onChange={(e)=>{setPesquisa(e.target.value)}} placeholder='digite sua pesquisa' ></input>
<div id='body'>


{bikes.map((el)=>{
    if(el.large_img){  return <div onClick={()=>{history.push(`/bike/${el.id}`)}}> <p>{el.title}</p><img  src={el.large_img} /> </div>

} else {
    return <div onClick={()=>{history.push(`/bike/${el.id}`)}}> <p>{el.title}</p> <img src={bikeSvg} className={el.frame_colors[0].split(',')[0]}/> </div>
}
})}
</div>
<Botoes>
<Botao src={back} onClick={()=>setPage(page-1)}alt={'<<'}></Botao>

<Botao src={next} onClick={()=>setPage(page+1)}alt={'>>'}></Botao>
</Botoes>
</div>)
}

export default Home