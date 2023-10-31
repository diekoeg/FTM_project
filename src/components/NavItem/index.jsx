import React from 'react'
import { NavLink } from "react-router-dom";

function NavItem({to, children, activeStyle}) {
  
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : 'text-lg hover:scale-105 ')}
    >
      {children}
    </NavLink>
  )
}

export {NavItem}