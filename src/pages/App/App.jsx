import {useRoutes, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages
import { Home } from '../Home'
import { Projects } from '../Projects'
import { Faq } from '../FAQ'
import { Mxteam } from '../Mxteam'
import { Prensa } from '../Prensa'

// Components
import { MyNavbar } from '../../components/MyNavbar'
import { FooterComp } from '../../components/FooterComp'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/projects', element: <Projects />},
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
      <MyNavbar />
      <FooterComp />
    </BrowserRouter>
  )
}

export default App
