import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Designer-removebg-preview.png'
export default function Header() {
  return (
    <div className='navbar'>
    <div className="logo" id='logo'><img src={logo} alt="" /></div>
      <ul>
        <li className='tabs'><Link className='tabs-link' to="/Password-Generator">Home</Link></li>
        <li className='tabs'><Link className='tabs-link' to="/Password-Generator/About">About</Link></li>
      </ul>
    </div>
  )
}
