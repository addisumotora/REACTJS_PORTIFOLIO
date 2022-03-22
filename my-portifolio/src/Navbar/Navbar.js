import './navbar.css'

import { useEffect, useState } from 'react'
import { TiDeleteOutline, TiThMenu } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import logo from '../images/logos/my logo.png'


function Navbar() {
  const [smallSize,setSmallSize] = useState(false)

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt='logo' className='img'/>
        </div>
        <ul className={smallSize? 'smallSize':"navbar-links"} onClick={() =>setSmallSize(false)}>
          <Link to="/" className='link'>
            <li>Home</li>
          </Link>
          <Link to="/about"  className='link'>
            <li>About</li>
          </Link>
          <Link to="/skills"  className='link'>
            <li>Skills</li>
          </Link>
          <Link to="/hobbies"  className='link'>
            <li>Hobbies</li>
          </Link>
          <Link to="/contact"  className='link'>
            <li>Contact</li>
          </Link>  
        </ul>
        {smallSize?<TiDeleteOutline className='del' onClick={() =>setSmallSize(false)}/> : <TiThMenu className='menu' onClick={() =>setSmallSize(true)}/> }
    </div>
  )
}

export default Navbar