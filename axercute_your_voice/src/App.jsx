import './App.css'
import { useState } from 'react'
import {Routes,Route} from "react-router"

import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/HomePage/HomePage'
import ContactUs from './Components/ContactUs/ContactUs'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Routes>

      <Route path ="/"
      element={<HomePage/>}
      />
      
      <Route path ="/contactUs"
      element={<ContactUs/>}
      />

    </Routes>
    </>
  )
}

export default App
