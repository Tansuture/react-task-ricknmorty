import { useState } from 'react';
import './App.css'

import { Route, Routes } from 'react-router-dom';

import RicknMorty from './components/RickNMorty/ricknmorty';
import Wrapper from './components/Authorization/Wrapper';
import { Auth } from './auth';

import Shop from './components/Shop/Shop';

function App() {
  const [token, setToken] = useState(localStorage.getItem('idToken'))
  


  return (
   
    <>
    <Auth.Provider value={{token,setToken}}>
{/* 
      <Navbar></Navbar> */}
      <Routes>
     <Route  path="/rick" element={<RicknMorty/>}></Route>
    <Route  path='/signIn' element={<Wrapper/>}></Route> 
 
   <Route  exact path='/' element={<Shop/>}></Route>

      </Routes>
      </Auth.Provider>

 
 </>
  );
}

export default App;
