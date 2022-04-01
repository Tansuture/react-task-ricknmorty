


const BySpecies = ({species,setSpecies})=>{
    let localspecies = [
        "Human", "Alien", "Humanoid",
        "Poopybutthole", "Mythological", "Unknown",
        "Animal", "Disease","Robot","Cronenberg","Planet",
      ];
      console.log(species)
    return (
        <> 
       
       <select  onChange={(e)=>setSpecies(e.target.value)} value={species} className=" form-select-lg mb-3 select-css"> 
      {localspecies.map(item=>
            <option>{item}</option>
            )}
      </select>
      </>
     )
 
}

export default BySpecies