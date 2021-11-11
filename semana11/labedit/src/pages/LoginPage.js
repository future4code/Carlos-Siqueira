import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { useHistory } from 'react-router'

export const LoginPage = () =>{
const [email,setEmail] = useState('')
const [senha,setSenha] = useState('')
const history = useHistory()
   function handleLogin(event) {
        event.preventDefault()
        const headers = {
            'Content-Type': 'application/json',
          }
          const body = {
            'email': email,
            'password': senha
          }

        axios.post(BASE_URL+'users/login',body,headers).then((res)=>{
            localStorage.setItem('token',res.data.token)
history.push('/')       }
        ).catch((err)=>console.log(err))
    }

    return (<>
<form onSubmit={handleLogin} >
    <input placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value) } ></input>
    <input placeholder='Senha' value={senha} onChange={(event) => setSenha(event.target.value) } ></input>
<button>Entrar</button>
</form>   

<button onClick={
    () => {
        history.push('/cadastro')
    }
} >Cadastrar</button>
</>)

}