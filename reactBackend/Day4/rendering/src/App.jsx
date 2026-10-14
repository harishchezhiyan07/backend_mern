import React from 'react'
import Navbar from './assets/component/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './assets/component/home'
import About from './assets/component/about'
import Contact from './assets/component/contact'
import Help from './assets/component/Help'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Help" element={<Help/>}/>
   </Routes>
   </>
  )
}

export default App