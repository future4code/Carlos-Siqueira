import styled, { StyleSheetManager } from 'styled-components'
import {useHistory,Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';



function LoginPage() {
  useEffect(()=>{if(localStorage.getItem('token')){
    history.push('/admin')
  }


},[])



  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  const history = useHistory()

  function handleEmail(event){
setEmail(event.target.value)
  }

  function handleSenha(event){
    setSenha(event.target.value)
      }

      function login(){
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
      <div>
 <input placeholder='Email' value={email} name='email' type='email' onChange={handleEmail} ></input>
 <input placeholder='Senha' value={senha} name='senha' type='password' onChange={handleSenha}></input>
 <button onClick={login}>Login</button>

       </div>
    );
  }
  
  export default LoginPage;
  