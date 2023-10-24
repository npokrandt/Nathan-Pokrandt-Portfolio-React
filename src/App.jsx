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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto velit sequi nobis voluptatibus a provident ipsam alias. Vel necessitatibus quo tempora vitae facilis ex nulla maxime, officiis libero, blanditiis minus esse voluptatem quam dignissimos laboriosam itaque unde iste sed nihil sunt iusto est id modi porro. Voluptas, nihil magni.</p>        
        {/* Inner stuff */}
        <Footer className='position-absolute right-100'/>
    </div>
  )
}

export default App
