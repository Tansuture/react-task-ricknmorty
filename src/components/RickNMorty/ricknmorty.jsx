import '../../App.css'
import Cards from '../Cards/Cards'
import Filter from '../Filter/Filter'
import Search from '../Search/Search'

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import Error from '../Error/Error'
import { Pagination } from '@mui/material'
import { getCharacters } from '../../store/actions';

const RicknMorty = ()=>{
    const [page,setPage]=useState(1)
    const [searchValue,setSearchValue]=useState('')
    const [status,setStatus]=useState('Alive')
    const [species,setSpecies] =useState('Human')

    const characters = useSelector((state)=>{
      return state.charactersReducer.characters
     })
    
    const dispatch= useDispatch()
    
     useEffect(()=>{
      dispatch(getCharacters(page,searchValue,status,species,characters))
     },[dispatch])
   
                             
   
  //  if(isError){
  //    return  <Error error={error.message}/>
  //  }
    return(
        <>
        <div className='App'>
          <div className=" flex">
          <img className="img" src="https://avatars.mds.yandex.net/get-ott/1672343/2a0000017e4094aa8e5de73d2e865255c24d/960x540"/>
          <Search setSearchValue={setSearchValue}searchValue={searchValue}/>
          <div className="row">
          <Filter setPage={setPage} setSpecies={setSpecies} species ={species}setStatus={setStatus}status={status}/>
          <div className="col-lg-9 col-12">
                <div className="row">
                <Cards  data={characters}/>
                </div>
          </div>
        </div>
    </div>
    <div className='paginate'>
      <Pagination sx={{color:'white'}} color="primary"count={200} onChange={()=>setPage(page+1)}/> 
      </div>
        </div>
        
        </>
    )
}

export default RicknMorty