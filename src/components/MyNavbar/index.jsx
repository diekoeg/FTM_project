import React from 'react'
import Logo from "../../assets/logo.svg?react";
import { Navbar} from 'flowbite-react';
import { NavItem } from '../NavItem';




function MyNavbar() {
  const activeStyle = 'underline underline-offset-4 font-semibold text-lg'
  return (
    <nav className=' top-0 fixed w-full md:absolute border-b-2 border-gray-400'>
      <Navbar fluid rounded className=' w-full px-5 bg-gray-200 font-[Raleway] lg:block '>
        <NavItem   to={'/'}
            activeStyle={activeStyle}
            >
              <Logo height="130" className="max-w-[250px] "/>
        </NavItem>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavItem to={'/'}
              activeStyle={activeStyle}
              >
                Home
          </NavItem>
          <NavItem to={'/about'}
            activeStyle={activeStyle}
            >
              Acerca del FMJ
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
          <NavItem to={'/join'}
              activeStyle={activeStyle}
            >
              ¡Únete!
          </NavItem>
          <NavItem to={'/events'}
              activeStyle={activeStyle}
            >
              Eventos
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