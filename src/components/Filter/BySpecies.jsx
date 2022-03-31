
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const BySpecies = ({species,setSpecies})=>{
    let localspecies = [
        "Human", "Alien", "Humanoid",
        "Poopybutthole", "Mythological", "Unknown",
        "Animal", "Disease","Robot","Cronenberg","Planet",
      ];
      console.log(species)
    return (
        <> 
       
       <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Species</InputLabel>
        <Select defaultValue="Human" value={species} native onChange={(e)=>setSpecies(e.target.value)} id="grouped-native-select" label="Status">
          <option aria-label="None" value="" />
            {localspecies.map(item=>
            <option>{item}</option>
            )}
        
        </Select>
      </FormControl>
      </>
     )
 
}

export default BySpecies