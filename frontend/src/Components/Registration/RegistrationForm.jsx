import React, { useState } from 'react'
import '../style/reg.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Box , useToast} from '@chakra-ui/react';
import axios from 'axios'

const RegistrationForm = () => {

  const Navigator = useNavigate()
  const toast = useToast();

  const [obj, setobj]= useState({
    name: '',
    email:'',
    password:'',
    gender:''
  })


  const handleSubmit = async(e)=>{

    e.preventDefault();
    try{
      let res = await axios.post('https://backend-jwq9.onrender.com/user/signup',obj)
     let data = await res.data
      console.log(data)
      if(data.token){
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position:'top'
        })
        Navigator('/login')
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
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:'top'
      })
    }

   
    

  }

  return (
    <Box marginTop="4%">
    <div>

      <form className='reg' onSubmit={handleSubmit}>

        <h3>Registration</h3>

        <label for="name">Name</label>
        <input type="text" 
        name='name' value={obj.name} 
        onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} placeholder="Alan Walker" id="username" />

        <label for="email">Email</label>
        <input type="email" 
        name='email' value={obj.email} 
        onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} 
         placeholder="alanwalker@gmail.com" id="email" />

          <label for="gender">Gender</label>
        <div className='gen'>
          <input type="radio"
          name='gender' value='male' 
          checked={obj.gender == 'male'}
          onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} 
          />
           <label htmlFor="">Male</label>
          <input type="radio"
          name='gender' value='female'
          checked={obj.gender == 'female'}
          onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} 
          /> <label htmlFor="">Female</label>
          <input type="radio"
          name='gender' value='prefer not to say'
          checked={obj.gender == 'prefer not to say'}
          onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} 
          /> <label htmlFor="">prefer not to say</label>
        </div>

      

        <label for="password">Password</label>
        <input type="password"
        name='password' value={obj.password} 
        onChange={(e)=>setobj({...obj,[e.target.name]:e.target.value})} 
        placeholder="Password" id="password" />

        <button id='btn'>Registration</button>
         <div className='link'>Have already an account? <Link to='/login'>Login Here</Link> </div>
      </form>
    </div>
    </Box>
  )
}

export default RegistrationForm