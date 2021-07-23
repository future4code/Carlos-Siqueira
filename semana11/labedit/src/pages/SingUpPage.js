import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { useHistory } from 'react-router'

export const SingUpPage = () =>{
    const [user,setUser] = useState('')
const [email,setEmail] = useState('')
const [senha,setSenha] = useState('')
const history = useHistory()
   function handleLogin(event) {
        event.preventDefault()
        const headers = {
            'Content-Type': 'application/json',
          }
          const body = {
              'username':user,
            'email': email,
            'password': senha
          }

        axios.post(BASE_URL+'users/signup',body,headers).then((res)=>{
            console.log(res)
            localStorage.setItem('token',res.data.token)
history.push('/')       }
        ).catch((err)=>console.log(err))
    }

    return (<>
<form onSubmit={handleLogin} >
<input placeholder='Username' value={user} onChange={(event) => setUser(event.target.value) } ></input>
    <input type='email' placeholder='E-mail' value={email} onChange={(event) => setEmail(event.target.value) } ></input>
    <input type='password' placeholder='Senha' value={senha} onChange={(event) => setSenha(event.target.value) } ></input>
<button>Cadastrar</button>
</form>   

<button onClick={
    () => {
        history.push('/login')
    }
} >Login</button>
</>)

}