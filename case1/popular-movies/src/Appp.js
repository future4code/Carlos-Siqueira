import styled from 'styled-components';
import axios from 'axios'
import { useEffect, useState } from 'react';
import next from './next.png'
import back from './back.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";



const Main = styled.div`
position:absolute;
top:10%;
left: 8%;
display: flex;
flex-direction: column;
width: 80vw;
height: fit-content;
justify-content: start;
align-items: center;
margin-bottom: 0;
background: white;
border-radius: 20px;


`
const Title = styled.h1`
font-family: 'Roboto';
align-content: center;

`

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

const Separator = styled.div`
    background: black;
    height: 2px;
width: 99%;

`

const Capa = styled.img`
width: 16%;
&:hover{
  width: 16.2%;

}
`

const Movies = styled.div`
display:flex;
gap: 15px;
flex-wrap: wrap;
margin-top: 20px;
margin-bottom: 20px;
justify-content: center;
align-items: center;
`
//`https://image.tmdb.org/t/p/w500/${el.poster_path}`

function Appp() {
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState([]);

  const history = useHistory();

   useEffect(() =>{
axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=378749fdf0c0e494c1ad49396dcd8bcb&page=${page}`).then((res)=>{
  setPopular(res.data.results)
  console.log('popular setado sem filtro')
  
})
   },[page])

   useEffect(() =>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=378749fdf0c0e494c1ad49396dcd8bcb&page=${page}`).then((res)=>{
      if(genre.length>0){
/*       setPopular(res.data.results.filter(elem => elem.genre_ids.some( ai => genre.includes(ai) );
 */      setPopular(res.data.results.filter(el => el.genre_ids.some(ar=>genre.includes(ar)) ))
    console.log('popular setado com genero')
      }
    })
       },[page,genre])
    
    


  
function ChangePage(){
  setPage(page+1)
}

function ChangePageB(){
  setPage(page-1)
}
       
const Back = styled.img`
position: absolute;
top:33%;
left: 30px;
opacity: 80%;
&:hover{
  opacity: 100%;
}
`
const Next = styled.img`
position: absolute;
top:33%;
right: 30px;
opacity: 80%;
&:hover{
  opacity: 100%;
}
`

function SelecionarGeneros(event ){
event.preventDefault();

let generos = genre
generos.push(event.value)
setGenre(generos)
}


  return (<>
      {page>1? <Back src={back} onClick={ChangePageB}  ></Back> :<></>}
<Logo onClick={()=>history.push('/home')} >LabeMovies</Logo>
  <Main>
    <Title>Os 20 Filmes populares da semana página {`${page}`}</Title>

<form>
<label>
<select value={genre} onChange={e => {setGenre(e.target.value)}}>
<option value='' disabled >Selecione o Genero desejado</option>
<option value={28}>Action</option>
<option value={12}>Adventure</option>
<option value={16}>Animation</option>
<option value={35}>Comedy</option>
<option value={80}>Crime</option>
<option value={99}>Documentary</option>
<option value={18}>Drama</option>
<option value={10751}>Family</option>
<option value={14}>Fantasy</option>
<option value={36}>History</option>
<option value={27}>Horror</option>
<option value={10402}>Music</option>
<option value={9648}>Mystery</option>
<option value={10749}>Romance</option>
<option value={878}>Science Fiction</option>
<option value={10770}>TV Movie</option>
<option value={53}>Thriller</option>
<option value={10752}>War</option>
<option value={37}>Western</option>






 
</select>


</label>

</form>
<button onClick={()=>history.go(0)} >Remover filtro</button>
    <Separator />

    <Movies>

  {popular.map((el,i)=>{
    return <Capa src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}></Capa>
  }) }

  {popular.length===0?  <p>Nenhum filme do genero selecionado encontrado nessa pagina, tente mudar de página</p>:<p></p>}
  </Movies>
   
  </Main>
  <Next src={next} onClick={ChangePage}  ></Next>

  </>
  );
}

export default Appp;
