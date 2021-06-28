import React from 'react';
import styled from 'styled-components';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';





class App extends React.Component {
  state = {
    etapa:1
  }

  renderizaEtapa = () => {
switch(this.state.etapa) {
case 1:return <Etapa1></Etapa1>
break
case 2:return <Etapa2></Etapa2>
break
case 3:return <Etapa3></Etapa3>
break
default: return <Final></Final> 


}
  }

  renderizaBotao = () => {
  if(this.state.etapa<4){
   return <button onClick={this.irParaProximaEtapa} >Próxima etapa</button> 
  }}


  irParaProximaEtapa = () => {
this.setState ({
        etapa : this.state.etapa + 1,
})
console.log(this.state.etapa);
}

  
  render(){
  return (
    <div >
{this.renderizaEtapa()}
{this.renderizaBotao()}
  </div>
  );}
  }

export default App;
