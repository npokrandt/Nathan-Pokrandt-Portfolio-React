import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
// import Project from './components/Project'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div className='position-relative'>
        <Header />
        <Outlet/>
        <Footer className='position-absolute right-100'/>
    </div>
  )
}

export default App
