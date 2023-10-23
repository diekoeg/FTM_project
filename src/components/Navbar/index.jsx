import React from 'react'
import { NavItem } from '../NavItem'


function Navbar() {
  const activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between
        items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavItem to={'/'}
            activeStyle={activeStyle}
            >
              Home
          </NavItem>
        </li>

        <li>
          <NavItem to={'/about'}
            activeStyle={activeStyle}
            >
              Acerca del FMJ
          </NavItem>
        </li>

        <li>
          <NavItem to={'/mxteam'}
            activeStyle={activeStyle}
            >
              Equipo Mexicano Rumbo al FMJ
          </NavItem>
        </li>

        <li>
          <NavItem to={'/prensa'}
            activeStyle={activeStyle}
            >
              Prensa
          </NavItem>
        </li>

        <li>
          <NavItem to={'/join'}
            activeStyle={activeStyle}
            >
              ¡Únete!
          </NavItem>
        </li>

        <li>
          <NavItem to={'/events'}
            activeStyle={activeStyle}
            >
              Eventos
          </NavItem>
        </li>

        <li>
          <NavItem to={'/faq'}
            activeStyle={activeStyle}
            >
              Preguntas Frecuentes
          </NavItem>
        </li>

      </ul>
    </nav>
  )
}

export {Navbar}