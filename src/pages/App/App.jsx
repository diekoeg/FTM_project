import {useRoutes, BrowserRouter} from 'react-router-dom'
import { useState } from 'react'

// Pages
import { Home } from '../Home'
import { Join } from '../Join'
import { About } from '../About'
import { Events } from '../Events'
import { Faq } from '../FAQ'
import { Mxteam } from '../Mxteam'
import { Prensa } from '../Prensa'

// Components
import { Navbar } from '../../components/Navbar'
import { FooterComp } from '../../components/FooterComp'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/join', element: <Join />},
    {path: '/about', element: <About />},
    {path: '/events', element: <Events />},
    {path: '/faq', element: <Faq />},
    {path: '/mxteam', element: <Mxteam />},
    {path: '/prensa', element: <Prensa />},
    {path: '/*', element: <Home />}
    
  ])

  return routes
}
  

function App() {
  
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar />
      <FooterComp />
    </BrowserRouter>
  )
}

export default App
