
import { useContext, useState } from 'react';
import { Auth } from '../../auth';
import SignIn from './SignIn';
import SignUp from "./SignUp";

const Wrapper =()=>{
    const [auth,setAuth]=useState(false)
    const {token}=useContext(Auth)
    
    const data=[{
        email:"tansuture@mail.ru",
        password:"12333"
    },
    {
        email:"barbi@mail.ru",
        password:"7777"
    }]
    const [users,setUsers]=useState(data)

     


    return(
        <>

     {!auth?(<SignUp setAuth={setAuth} onSucces={(data)=>setUsers([...users,data])}/>
       ):(
        <SignIn  auth={auth} setAuth={setAuth}onSucces={(data)=>setUsers([...users],data)}/>
       )}
   
    
         
        </>
    )
}
export default Wrapper