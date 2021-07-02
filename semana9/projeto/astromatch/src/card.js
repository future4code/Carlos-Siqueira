import styled from 'styled-components'
import itsAMatch1 from './match.png'

import axios from 'axios'
import { useEffect, useState } from 'react'

const Foto = styled.img`
max-height: 300px;
max-width: 400px;

z-index: 1;
`

const ItsAMatch = styled.img`
position: absolute;
display:flex;
justify-content:center;
max-width: 400px;
z-index: 4;
background-color: rgba(157,157,157,0.55);
border-radius: 15%;
`


const Nome = styled.h1`
position: relative;
width: fit-content;
top:-2em;
z-index: 2;
background:rgba(157,157,157,0.55);
border-radius: 10%;
`

const Botaox = styled.button`
max-height: 300px;
border-radius: 50%;
    width: 80px;
    height: 80px;
    border: 1px solid red;
    color: red;
    font-size: 50px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;

`
const Botoes = styled.div`
display: flex;
flex-direction:row;
justify-content: space-evenly;
`




const BotaoS2 = styled.button`
max-height: 300px;
border-radius: 50%;
    width: 80px;
    height: 80px;
    border: 1px solid green;
    color: green;
    font-size: 50px;
    transform: scale(0.7);
    transition: all 0.2s ease 0s;
    position: relative;
    box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
    overflow: hidden;

`

export function Card(props){
    const [perfil,setPerfil] = useState({})
    const [match,setMatch] = useState(false)


    useEffect(() => {
        getProfileInfo()
    },[])

    useEffect(() => {
        deuMatch()
    },[match])

    function getProfileInfo(){
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/person')
        .then(res => {
setPerfil(res.data.profile)        })
.catch(err =>{
    console.log(err)
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/clear')
        .then(res => { setPerfil(res.data.profile)     })

})
    }

   function darLike(){
    setMatch(false)

        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/choose-person",{
            'id':perfil.id,
            'choice':true
        })
        .then(res => {
            let match = res.data.isMatch
        if(match){
            setMatch(true)
            deuMatch()
        } else {
            getProfileInfo()
        }
        })
        
    }    


    function deuMatch (){
        console.log('deu match')
       

    }

   function darX(){
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/choose-person',{
        'id':perfil.id,
        'choice':false
    })
    .then(res => {  getProfileInfo()})
    
}    

let yeaah = <img scr={itsAMatch1} alt="yeaaH"/>
let matching = !match ? <></>  :yeaah

let cartao
try {cartao = <><Foto src={perfil.photo}/><Nome>{perfil.name +", "+ perfil.age}</Nome><h3>{perfil.bio}</h3></>}
    catch(err){console.error(err)}
    return(
    <>
    {matching}
    {perfil? cartao : window.location.reload()}
     <Botoes>
<Botaox onClick={darX}>X</Botaox>
<BotaoS2 onClick={darLike}>♥️</BotaoS2>
</Botoes>

    <br></br>
</>
)
}