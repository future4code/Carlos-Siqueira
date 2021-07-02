import styled from 'styled-components'

import axios from 'axios'
import { useEffect, useState } from 'react'

const Divona = styled.div`
display: grid;
grid-row-gap: 5px;

`

const Divinha = styled.div`
img{max-height: 20px;
border-radius:5px};
display: grid;
grid-template-columns: 30px 1fr;
grid-row-gap: 5px;

img{
    justify-self: center;
}
`



export function Matches(){

const [matches, setMatches] = useState([])
    
useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/matches')
    .then(res => {
    setMatches(res.data.matches)
   })},[])

 
  

    
    
    return(<Divona>




 
 {matches.map((e,i)=>{
     e.key = e.id
       return <Divinha key={e.id}><img src={e.photo} alt={e.name} /><span>{e.name +", "+ e.age}</span></Divinha>

    }) }
    
    </Divona>)
}


