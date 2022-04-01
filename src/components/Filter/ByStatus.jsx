import './filter.css'



const ByStatus = ({status,setStatus})=>{
    const  localstatus = ['Alive','Dead','Unknown']
  
    return(
        <> 
       
       <select onChange={(e)=>setStatus(e.target.value)} value={status} className=" form-select-lg  select-css"> 

      {localstatus.map(item=>
            <option>{item}</option>
            )}
      </select>
          
          
            
  

        </>
    )
}

export default ByStatus