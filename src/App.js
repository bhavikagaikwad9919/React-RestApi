import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import Varifyotp from './varifyotp';
import Registration from './Registration';
import Endpage from './Endpage';
import swDev from "./swDev"

function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/varifyotp' element={<Varifyotp/>}/>
      <Route path='/Registration' element={<Registration/>}/>
     <Route path='/Endpage' element={<Endpage/>}/>
     
      </Routes>
    </div>
  );
}

swDev();
export default App;
