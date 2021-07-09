import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Formu = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
margin: 30vh 15vw;
gap:2vh;

div{
  display: flex;
  gap:10px;

  strong{
    width: 10vw;
  }

  input{
    width: 80%;
  }
}

button{display: flex;
justify-content: center;
margin:auto;  width: 40%;
background: gray;
color: white;
font-weight: 800;
}

`

function LoginPage() {
  const history = useHistory()

  useEffect(()=>{if(localStorage.getItem('token')){
    history.push('/admin')
  }


},[history])



  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')

  function handleEmail(event){
setEmail(event.target.value)
  }

  function handleSenha(event){
    setSenha(event.target.value)
      }

      function login(event){
        event.preventDefault()

        const body = {
          email:email,
          password:senha
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos/login`,body).then((res) =>{
          console.log('deu certo',res.data.token)
localStorage.setItem('token',res.data.token)
history.push('/admin')
        }).catch((err)=>{console.log(err)
      })}
    return (
      <Formu onSubmit={login}>
      <div>
        <strong> E-mail</strong>
 <input placeholder='Email' value={email} name='email' type='email' onChange={handleEmail} ></input>
 </div>
 <div>
 <strong> Senha</strong>
 <input placeholder='Senha' value={senha} name='senha' type='password' onChange={handleSenha}></input>
 </div>
 <button >Login</button>

       </Formu>
    );
  }
  
  export default LoginPage;
  