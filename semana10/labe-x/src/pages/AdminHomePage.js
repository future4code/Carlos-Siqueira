
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'


const Appl = styled.div``
const Botoes = styled.div``
const Viagens = styled.div``


function AdminHomePage() {
  const history = useHistory()
  function newTrip(){
    history.push('new')
  }
  function voltar(){
  history.goBack()
  }

    return (
      <Appl>
      <h1>Painel Administrativo</h1>
     <Botoes> <button onClick={voltar}>Voltar</button>
      <button onClick={newTrip} >Criar Viagem</button>
      <button>Logout</button>
      </Botoes>
      <Viagens></Viagens>
      </Appl>
    );
  }
  
  export default AdminHomePage;
  