import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './assets/(pages)/login/page';
import Register from './assets/(pages)/register/page'
import Home from './assets/(pages)/home/page'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
