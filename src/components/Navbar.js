import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/chose" >register</Link>
      <Link to="/login">login</Link>
    </div>
  )
}

export default Navbar
