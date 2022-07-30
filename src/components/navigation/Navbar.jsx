import {AiOutlineMenuUnfold} from 'react-icons/ai'
import React, {useState} from 'react'
import './navbar.css'

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true)
  return (
    <div className='nav__navigation'>
      <a href="/" className="brand-name"> MacroSoft
      </a>
      <button
        className="hamburger"
        onClick={() => 
        {setIsNavExpanded(!isNavExpanded)}}>
        <AiOutlineMenuUnfold/>
      </button>
      <div className=
      {isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
  </div>
  )
}
export default Navbar