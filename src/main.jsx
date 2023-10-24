import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutMe from './views/AboutMe.jsx'
import Contact from './views/Contact.jsx'
import Portfolio from './views/Portfolio.jsx'
import Resume from './views/Resume.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <AboutMe/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'portfolio',
        element: <Portfolio/>
      },
      {
        path: 'resume',
        element: <Resume/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
