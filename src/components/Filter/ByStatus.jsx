import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const ByStatus = ({status,setStatus})=>{
    const  localstatus = ['Alive','Dead','Unknown']
  
    return(
        <> 
       
       <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Status</InputLabel>
        <Select  defaultValue="Alive" value={status} native onChange={(e)=>setStatus(e.target.value)} id="grouped-native-select" label="Status">
          <option aria-label="None" value="" />
            {localstatus.map(item=>
            <option>{item}</option>
            )}
        
        </Select>
      </FormControl>
     
     
          
            
  

        </>
    )
}

export default ByStatus