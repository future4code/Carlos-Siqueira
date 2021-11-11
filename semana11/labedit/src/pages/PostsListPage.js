import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { useHistory } from 'react-router'

import createHistory from 'history/createBrowserHistory'


export const PostsListPage = () =>{
    const histori = createHistory();

const [token,setToken] = useState('')
const [posts,setPosts] = useState([])
const [titulo,setTitulo] = useState('')
const [texto,setTexto] = useState('')
const history = useHistory()
    useEffect(()=>{
        setToken(localStorage.getItem('token'))
console.log(token)
      

},[])

    useEffect(()=>{
      

axios.get(BASE_URL+'posts',{headers:{ 'Authorization': token
}}).then((res)=>{
    console.log(res.data)
    setPosts(res.data);
    
}).catch((err)=>console.log(err))
    },[token])

function createPost(){
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
      }
      const body = {
        'title': titulo,
        'body': texto
      }

      axios.post(BASE_URL+'posts',body,{headers :{        'Authorization': token
    }}).then((res)=>{console.log(res)
setTitulo('')
setTexto('')
histori.go(0)    })
    }

let teste = <div></div>

function listPosts(){
     teste = posts.map((el)=> { 
         if(el.commentCount===null){el.commentCount = 0}

        return( <div onClick={() => { history.push(`/post/${el.id}`)        }} key={el.id}>       
                            <p>{el.username}</p> 
                            <p>{el.title}</p>
            <span>{el.body}</span> 
             <span>{el.commentCount }Comentarios</span>        
        </div>)
        
    }
    
        )
        return teste
}

    return (<>
        <div>
        <input placeholder='Escreva o titulo' onChange={(event) => setTitulo(event.target.value)} value={titulo} />

<input placeholder='Escreva seu post' onChange={(event) => setTexto(event.target.value)} value={texto} />
            <button onClick={createPost}>  Postar</button>
        </div>

        <div>{listPosts()}
            </div>
    </>)
}