import styled from 'styled-components';
import axios from 'axios'
import { useEffect, useState } from 'react';

import {
 
  Link,
  useParams
} from "react-router-dom";


function Movie(){
    const [movie,setMovie] = useState({poster_path:'',release_date:'',genres:[]})
    const params = useParams()
const[generos,setGeneros] = useState('')

console.log(params.id)

useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=378749fdf0c0e494c1ad49396dcd8bcb&language=pt-BR&`).then((res)=>{
        console.log(res.data)
         setGeneros(movie.genres.map(element => {
            return " "+element.name
        }))
        setMovie(res.data)
        console.log(movie)
        console.log('popular setado sem filtro')
        
      })


},[movie,params])

const Logo = styled.h1`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top:2%;
left: 43%;
font-family: 'Roboto';
align-content: center;

`

const Main = styled.div`
position:absolute;
display: flex;
top:10%;
left: 8%;
width: 80vw;
height: fit-content;
justify-content: start;
align-items: flex-start;
margin-bottom: 0;
background: white;
border-radius: 20px;
padding: 2%;

div{padding:1%}

@media(max-width: 800px){
    flex-direction:column;

}
`

const Capa = styled.img`
height: 53vh;
grid-column: 1;
grid-row: 1-3;

@media(max-width: 800px){
margin:auto
}

`





    return(<>
    
    
    
    <Logo><Link to={'/home'}>LabeMovies</Link></Logo>

<Main>
<Capa src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
<div>
<h1>{movie.original_title+' - '+movie.release_date.split('-')[0]} </h1><br/>
<h4>{movie.release_date+' - '+generos+' - '+movie.runtime+' Minutos'}</h4>
<h2>Sinopse</h2>
<p>{movie.overview}</p>
</div>
</Main>

    </>)
}

export default Movie;