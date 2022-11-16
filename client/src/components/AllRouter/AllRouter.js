import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Auth from '../Pages/Auth/Auth';
import Home from '../Pages/Home/Home';

function AllRouter() {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />}/>
      <Route path='/home' element={<Home />}/>
    </Routes>
  )
}

export default AllRouter