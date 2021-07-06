
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Appl = styled.div`
display:flex;
flex-direction:column;`
const Botoes = styled.div`
display: flex;`



function CreateTripPage() {

  const history = useHistory()
  function createTrip(){
    history.push('new')
  }
  function voltar(){
  history.goBack()
  }
    return (
      <Appl>
        <h1>Criar Viagem</h1>
        
        <input placeholder='Nome' ></input>

        <select>

        <option>Escolha um Planeta</option>

</select>
<input type='date' placeholder='mm/dd/yyy' ></input>
<input placeholder='descricao' ></input>
<input placeholder='duracao em dias' ></input>
<select>
  <option>oi</option>
  </select>
  <Botoes> <button onClick={voltar}>Voltar</button>
      <button onClick={createTrip} >Criar</button>
      </Botoes>

      </Appl>
    );
  }
  
  export default CreateTripPage;
  