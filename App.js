import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import States from './components/States';
import Places from './components/Places';
import About from './components/About';
import Test from './components/Test';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Welcome />}/>
         <Route path='/states' element={<States />}/>
         <Route path="/places/:id" element={<Places />}/>
         <Route path='/about' element={<About />}/>
       </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
