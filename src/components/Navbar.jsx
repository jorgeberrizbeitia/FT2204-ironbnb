import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {

  // const activeClass = (navInfo) => {
  //   console.log(navInfo)
  //   return navInfo.isActive === true ? "active-nav" : "inactive-nav"
  // }

  const toggleStyles = (navInfo) => {
    console.log(navInfo)
    return navInfo.isActive === true ? activeStyles : inActiveStyles
  }

  const activeStyles = {
    color: "greenyellow"
  }

  const inActiveStyles = {
    color: "lightseagreen"
  }

  return (
    <div>
    
      {/* <NavLink to="/" className={activeClass}>Home</NavLink>
      <NavLink to="/pisos" className={activeClass}>Ver Pisos</NavLink>
      <NavLink to="/pisos/add-form" className={activeClass}>Crear Piso</NavLink> */}

      <NavLink to="/" style={toggleStyles}>Home</NavLink>
      <NavLink to="/pisos" end={true} style={toggleStyles} >Ver Pisos</NavLink>
      <NavLink to="/pisos/add-form" style={toggleStyles}>Crear Piso</NavLink>
    
      {/* end={true} significa que debe comparar el enlace y debe hacer match perfecto */}

    </div>
  )
}

export default Navbar