import styled from 'styled-components'
import {useHistory} from 'react-router-dom'


const Botao = styled.button`
grid-column-start: 2;
grid-row-start: 3;
border-radius: 8px;
`

const Botao2 = styled.button`
grid-column-start: 3;
grid-row-start: 3;
border-radius: 8px;

`



const Appl = styled.div`
display: grid;
grid-template-columns: 1fr 300px 300px 1fr;
grid-template-rows: 200px 70px 50px 1fr;
grid-gap: 30px;

`

const Title = styled.h1`
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;
margin:auto;
`


 function HomePage() {
let history = useHistory()

 function handleClickRoute(rota) {
  history.push(`/${rota}`);
}
    return (
      <Appl>
<Title>LabeX</Title>  
<Botao onClick={() => handleClickRoute('trips') }>Ver Viagens</Botao>  
<Botao2
onClick={() => handleClickRoute('login') }
>Login</Botao2>  

  </Appl>
    );
  }
  
  export default HomePage;
