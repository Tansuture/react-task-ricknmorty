
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import Input from '@mui/material/Input';

import axios from 'axios';
import Button from '@mui/material/Button';
import { Auth } from '../../auth';

const SignUp =({onSucces,setAuth})=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPass,setConfrimPass]=useState('')
    const {token,setToken}=useContext(Auth)
  
    
  
    const SendUserData= async(userdata)=>{

        await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuHsqhY4QZKFs0X487o2bM7ITRnzbYJHU`,{
            email:userdata.email,
            password:userdata.password,
            returnSecureToken:true
        }).then((data) => {
            setAuth(true)
            setToken(data.data.idToken)
            localStorage.setItem('idToken', data.data.idToken)
        })
        
            
      
    }
    const validateForm = (e)=>{
        
        e.preventDefault()
        if(!password.match(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)&& !confirmPass.match(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)){
            alert('PLEASE TYPE RIGHT REQUIRMENTS')
            return
        }
        if(password !==confirmPass){
            alert('wrong')
            return
        }
//        

        
        const data={email,password}
        onSucces(data)  
        SendUserData(data)
        setEmail('')
        setConfrimPass('')
        setPassword('')
    }

    return(
        <>
        
     <Box  ml={9}mt={10}>
     <form onSubmit={validateForm}>
     <Input
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        />
        <br></br>
        <br></br>
        <Input

        placeholder='password'
        
   
        onChange={(e) => setPassword(e.target.value)}
  
        value={password}

/>
        <br></br>
        <br></br>
        <Input
        placeholder='password'
      
        value={confirmPass}
        onChange={(e) => setConfrimPass(e.target.value)}
        />
        <br></br>
        <br></br>
        <Button type="submit" variant="contained">Submit</Button>
        </form>
        </Box>


        </>
    )
}
export default SignUp