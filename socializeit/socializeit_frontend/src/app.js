import React from 'react'
import { Routes, Route } from  'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';


export default function app() {
  return (
    <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
    </Routes>
  )
}
