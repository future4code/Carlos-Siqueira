import styled from 'styled-components'
import logo from './logo.svg'
import Matchess from './matches.png'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Divinha = styled.div`
img{max-height: 20px;
border-radius:5px}
`



export function Matches(){

const [matches, setMatches] = useState([])
    
useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/matches')
    .then(res => {
    setMatches(res.data.matches)
   })},[])

 
  function test(){
      //matches[0].name
    matches.map((e)=>{
        console.log(e)
    }) 

 }

    
    
    return(<>




 
 {matches.map((e)=>{
       return <Divinha><img src={e.photo} /><span>{e.name +", "+ e.age}</span></Divinha>

    }) }
    
    </>)
}


