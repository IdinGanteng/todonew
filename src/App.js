import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from './routes/Login';
import Toedoe from './routes/Toedoe';
import Registrasi from './routes/Registrasi';
import Home from './routes/home'


const App =()=> {
  return (
    <div>
    <Router>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="toedoe" element={<Toedoe />} />
      <Route path="registrasi" element={<Registrasi/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
  </Router>

     
    </div>
  );
}

export default App;