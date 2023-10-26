import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <div>
        <Header />
        <Outlet/>
        <Footer className='position-absolute right-100'/>
    </div>
  )
}

export default App
