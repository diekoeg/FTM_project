import React from 'react'
import { Navbar} from 'flowbite-react';
import { NavItem } from '../NavItem';
import { Image } from 'react-bootstrap';

function MyNavbar() {
  const [collapsed,setCollapsed] = React.useState(false);
  const handleNav = () => (
    setCollapsed((state)=>!state)
  )

  const img1 = new URL('/src/assets/ft-logo.webp',import.meta.url).href

  const activeStyle = 'underline underline-offset-4 font-semibold text-2xl'
  return (
    <nav className='bg-indigo-900 top-0 fixed w-full md:absolute z-10'>
      <Navbar fluid rounded className='bg-indigo-900 text-white w-full px-5 font-[Raleway] lg:block '>
        <NavItem className = 'flex justify-center'
            to={'/'}
            activeStyle={activeStyle}
            >
              <Image src={img1} className="max-w-[200px] -mt-15 max-h-[100px] fill-white xl:ml-24 h-[300px]"/>
              {/*<span>Agencia Conjunta Cooperación Glocal</span>*/}
        </NavItem>

        <Navbar.Toggle onClick={handleNav}/>
        <Navbar.Collapse className={`-mt-5 ${collapsed ? 'flex':'hidden'}`} 
        onClick={handleNav}>
          <NavItem to={'/'}
              activeStyle={activeStyle}
              >
                Home
          </NavItem>
          <NavItem to={'/mxteam'}
              activeStyle={activeStyle}
            >
              Equipo Mexicano
          </NavItem>
          <NavItem to={'/prensa'}
              activeStyle={activeStyle}
            >
              Prensa
          </NavItem>
          <NavItem to={'/projects'}
              activeStyle={activeStyle}
            >
              Proyectos
          </NavItem>
          <NavItem to={'/faq'}
            activeStyle={activeStyle}
            >
              FAQ
          </NavItem>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export {MyNavbar}