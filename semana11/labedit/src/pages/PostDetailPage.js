import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { useHistory } from 'react-router'
import { useParams } from 'react-router'

export const PostDetailPage = () =>{
    const [token,setToken] = useState('')
    const [posts,setPosts] = useState([])
    const [post,setPost] = useState([{'body':''}])

let params = useParams()
useEffect(()=>{    
    setToken(localStorage.getItem('token'))

},[]) 

useEffect(()=>{    
    axios.get(BASE_URL+'posts',{headers:{ 'Authorization': token
}}).then((res)=>{
    console.log(res.data)
    setPosts(res.data);
    
}).catch((err)=>console.log(err))
    
},[token]) 


useEffect(()=>{    
    console.log('effects')
let poste = posts.filter(p => p.id===params.id)
      setPost(poste[0])
      console.log(post)
},[posts]) 

return (
<p>body}</p>
    )
}

