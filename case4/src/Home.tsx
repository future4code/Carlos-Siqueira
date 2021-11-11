import React, { useEffect, useState } from 'react';
import axios from 'axios'
import styled from 'styled-components'
function Home() {
    const App = styled.div`

@media(max-width: 1500px){
    display: flex;
    flex-direction: column;
    height: 100vh;
    aside{
        grid-row-start: 1;
        grid-row-end:2
    }

    main{
        grid-row-start: 2;
        grid-row-end:3
    }
}

    display: grid;
    grid-template-columns: 300px,1fr;
    grid-template-rows: 1fr;
height: 100vh;

    aside{

        grid-column:1;
        padding: 200px 50px;
    background-color: #6befa3;

}
    
    main{

        grid-column: 2;
        display: flex;
        gap:6%;
background-color: #efefef;
padding: 200px 50px;

    };

    main p {
        border-radius: 50%;
        background-color: #ffffff;
        padding: 2%;
        height: 1.2rem;
    }
    `

    const  [sorteio,setSorteio] = useState('')
    const  [data,setData] = useState({numeros:[],id:'',data:''})

    useEffect(()=>{

      
        axios.get(`https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${sorteio}`).then((res)=>{
setData(res.data)
console.log(res.data)
        })
    },[sorteio])
    return(<App>
    <aside>
        <select onChange={(e:any)=>{setSorteio(e.target.value)}}>
        <option selected disabled>Escolha o sorteio</option>

            <option value={'2359'}>mega-sena</option>
            <option value={'5534'}>quina</option>
            <option value={'2200'}>lotofácil</option>
            <option value={'2167'}>lotomania</option>
            <option value={'1622'}>timemania</option>
            <option value={'440'}>dia de sorte</option>

        </select>
<p>concurso:</p>
        {<p>{data.id} - {data.data.split('T')[0]}</p>}
    </aside>
    <main>
{data.numeros.map((el:any)=>{return <p>{el}</p>})}    </main>
    
    
    </App>)
}

export default Home