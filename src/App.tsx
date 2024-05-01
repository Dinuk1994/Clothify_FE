import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './assets/(pages)/login/page';
import Register from './assets/(pages)/register/page'
import Home from './assets/(pages)/home/page'
import Cart from './assets/(pages)/cart/page'
import Payment from './assets/(pages)/payment/page'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
