import styled from 'styled-components'
import {useHistory} from 'react-router-dom'


const Botao = styled.button`
border-radius: 8px;
`

const Botao2 = styled.button`

border-radius: 8px;

`
const Botoes = styled.div`
display:flex;
justify-content: center;
gap:30px;
`



const Appl = styled.div`
display: flex;
flex-direction: column;
margin: 10vw;
gap:10px;
`

const Title = styled.h1`
margin:auto;
`


 function ApplicationFormPage() {
let history = useHistory()

 function handleClickRoute(rota) {
  history.push(`/${rota}`);
}
    return (
      <Appl>
        <Title>Inscreva-se para uma viagem</Title>  
<select>
  <option>oi</option>
  <option>oi1</option>
  <option>oi</option>

</select>
<input placeholder='Nome' ></input>
<input placeholder='Idade' ></input>
<input placeholder='Texto de Candidatura' ></input>
<input placeholder='Profissão' ></input>
<select>
  <option>oi</option>
  <option>oi1</option>
  <option>oi</option>

</select>

<Botoes>
<Botao onClick={() => handleClickRoute('') }>Voltar</Botao>  
<Botao2
onClick={() => handleClickRoute('app') }
>Enviar</Botao2>  
</Botoes>
  </Appl>
    );
  }
  
  export default ApplicationFormPage;
