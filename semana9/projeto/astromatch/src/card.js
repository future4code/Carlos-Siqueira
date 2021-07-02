import styled from 'styled-components'
import logo from './logo.svg'
import Matchess from './matches.png'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Matches } from './matches'

const Foto = styled.img`
max-height: 300px;
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

export function Card(){
    const [perfil,setPerfil] = useState({})
    const [matches, setMatches] = useState({})


    useEffect(() => {
        getProfileInfo()
    },[])

    function getProfileInfo(){
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/person')
        .then(res => {
setPerfil(res.data.profile)        })
    }

   function darLike(){
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlosfelipe/choose-person',{
            'id':perfil.id,
            'choice':true
        })
        .then(res => {
            let match = res.data.isMatch
        if(match){
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




    
    return(
    <>
    <Foto src={perfil.photo}/>

<h1>{perfil.name +", "+ perfil.age}</h1>
<h3>{perfil.bio}</h3>
<Botaox onClick={darX}>X</Botaox>
<BotaoS2 onClick={darLike}>♥️</BotaoS2>
    <br></br>
</>
)
}