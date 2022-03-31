import { useState } from 'react';
import './App.css'

import Cards from './components/Cards/Cards';
import { useQuery } from "react-query"
import Pagination from '@mui/material/Pagination';
import { fetchAll} from './data';
import Search from './components/Search/Search';
import Error from './components/Error/Error';
import Filter from './components/Filter/Filter';

function App() {
  
  
 const [page,setPage]=useState(1)
 const [searchValue,setSearchValue]=useState('')
 const [status,setStatus]=useState('Alive')
 const [species,setSpecies] =useState('Human')

  const {isLoading,data:response,error,isError}=useQuery(['persons lists',page,searchValue,status,species],()=>fetchAll(page,searchValue,status,species),{
    keepPreviousData:true
  })
  


if(isError){
  return <h2 className='error'>{error.message}</h2>
}

  return (

    <div className="App">
       <div className=" flex">
          <img className="img" src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000017e4094aa8e5de73d2e865255c24d/960x540"/>
          <Search setSearchValue={setSearchValue}searchValue={searchValue}/>
          <div className="row">
          <Filter setPage={setPage} setSpecies={setSpecies} species ={species}setStatus={setStatus}status={status}/>
          <div className="col-lg-9 col-12">
                <div className="row">
                {!isLoading && response.results ? (<Cards   data={response.results}/>):(<div>{error}</div>)}
                </div>
          </div>
        </div>
    </div>
      <div className='paginate'>
      <Pagination sx={{color:'white'}} color="primary"count={200} onChange={()=>setPage(page+1)}/> 
      </div>
    </div>
 
  );
}

export default App;
