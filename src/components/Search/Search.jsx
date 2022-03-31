import './search.css'

const Search = ({searchValue,setSearchValue})=>{
    return(
        <>
         <input
         className='input'
        onChange={(e) => {
        setSearchValue(e.target.value);
        }}
        placeholder="Let's find them"
        
        type="text"
        value={searchValue}
        />
       
        
        </>
    )
}

export default Search