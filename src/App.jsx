import {useRoutes, BrowserRouter} from 'react-router-dom'
import { useState } from 'react'

// Pages
import { Home } from './pages/Home'
import { Join } from './pages/Join'
import { About } from './pages/About'
import { Events } from './pages/Events'
import { Faq } from './pages/FAQ'
import { Mxteam } from './pages/Mxteam'
import { Prensa } from './pages/Prensa'

// Components
import { Navbar } from './components/Navbar'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/join', element: <Join />},
    {path: '/about', element: <About />},
    {path: '/events', element: <Events />},
    {path: '/faq', element: <Faq />},
    {path: '/mxteam', element: <Mxteam />},
    {path: '/prensa', element: <Prensa />}
    
  ])

  return routes
}
  

function App() {
  
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar />
    </BrowserRouter>
  )
}

export default App
