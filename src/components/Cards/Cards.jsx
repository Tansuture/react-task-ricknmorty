import 'bootstrap/dist/css/bootstrap.css';

import './cards.css'
import { getStatus } from './getStatus';


const Cards =({data,isLoading})=>{
   
//    console.log(response.data.results[0])
    return(
        
        <>{isLoading || !data ?(<div> 'Loading..'</div>):(
            <div className='card-group position-relative'>

                {data.map(({id,image,name,status})=>
                   <div key={id}className='card-container  mb-4 mt-2 '>
                       {getStatus(status)}
                   <img className="card-img-top" src={image} alt="Card image cap"/>
                   <div className="card-body back">
                     <h5 className="card-title title">{name}</h5>
                   </div>
                 </div>
                )}
            </div>
        )}</>
    )
}
export default Cards