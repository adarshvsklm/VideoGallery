import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../Components/Login/Login'
import { serverUrl } from '../serverUrl'

function LoginPage() {
    const navigate=useNavigate()
    axios.get(`${serverUrl}/login/check`,{withCredentials:true})
   .then((res)=>{
     navigate('/')
   })
   .catch((err)=>{
     console.log(err);
   })
  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage
