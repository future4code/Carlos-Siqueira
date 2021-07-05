import styled from 'styled-components'

const Botao = styled.button`
grid-column-start: 2;
grid-row-start: 3;
`

const Botao2 = styled.button`
grid-column-start: 3;
grid-row-start: 3;
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
    return (
      <Appl>
<Title>LabeX</Title>  
<Botao>Ver Viagens</Botao>  
<Botao2>Login</Botao2>  

  </Appl>
    );
  }
  
  export default HomePage;
  