import React, { useState } from 'react'
import '../style/style.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Box , useToast} from '@chakra-ui/react';
import axios from 'axios'

const LoginForm = () => {
  const Navigator = useNavigate()
  const toast = useToast();
  const [obj, setobj]= useState({
    email: '',
    password:'',
  })


  const handleLogin = async(e)=>{
    e.preventDefault();
    try{
      let res = await axios.post('http://localhost:8080/user/login',obj)
     let data = await res.data
      console.log(data)
      if(data.token){
        toast({
          title: 'Logged In',
          description: "You are logged in your account",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position:'top'
        })
        Navigator('/')
      }else{
        toast({
          title: 'Error Occured',
          description: data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position:'top'
        })
      }

    }
    catch{
      toast({
        title: 'Error Occured',
        description: "error",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:'top'
      })
  }
}


  return (
    <Box mt='20%'>
    <div>
      <form className='login' onSubmit={handleLogin}>

        <h3>Login</h3>

        <label for="username">Username</label>
        <input type="text"
        name='email' value={obj.email} 
        onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})}
        placeholder="Email" id="username" />

        <label for="password">Password</label>
        <input type="password"
        name='password' value={obj.password} 
        onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})}
        placeholder="Password" id="password" />

        <button>Log In</button>
        <div className='link'>Don't have an account? <Link to='/'>Registration Here</Link> </div>

      </form>
    </div>
    </Box>
  )
}

export default LoginForm