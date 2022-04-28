import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../auth"


const Navbar = ()=>{
    let history = useNavigate()
    const{token}=useContext(Auth)
    const removeKey =()=>{
        localStorage.removeItem('idToken')

        history('/')
        
    }
    return(
        <>
        
        
        {token  ?(<button onClick={removeKey}>ВЫХОД</button>):(<button >ВХОД</button>) }
        </>
    )
}
export default Navbar