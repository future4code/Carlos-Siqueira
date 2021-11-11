import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import './home.css'

function Home(){
const [pesquisa, setPesquisa] = useState('')
const [pesquisas, setPesquisas] = useState([])
const [response,setResponse] = useState({})
let array
function history(){
array = pesquisas
array.push(pesquisa)
setPesquisas(array)
console.log(array)
axios.get(`https://api.github.com/users/${pesquisa}`).then((res)=>{
        setResponse(res.data)
        console.log(res)
    }).catch((e)=>{
        alert("erro "+e.response.data.message)
        console.log(e.response)
        })
}






    return (
        <div className={'aplicativo'}>
<p>Pesquise por usuarios do github</p><input value={pesquisa} onChange={(e)=>setPesquisa(e.target.value)} >
</input>
{pesquisas.length<1?<></>:<select onChange={(el)=>{
setPesquisa(el.target.value)    
}} > 
    <option defaultValue disabled>Histórico</option>
  {pesquisas.map((el,i)=>{
      return<option key={new Date()+i} value={el}>{el}</option>
  })}</select>}
<button onClick={history}>pesquisar</button>
    

    
<h1>{response.login}</h1>
<img src={response.avatar_url} alt={response.login}/>
</div>

    )
}

export default Home