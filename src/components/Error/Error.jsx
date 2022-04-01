import './Error.css'
import sad from './sad.png'

const Error =({error})=>{
    return(
        <>
        <p className='top'>Something goes wrong</p>
        <img className="sad" src={sad}></img>
        <p className='bottom'>{error}</p>
                
     
        </>
    )
}

export default Error