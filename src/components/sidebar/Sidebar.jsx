import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaSlack} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {RiGooglePlayFill} from 'react-icons/ri'

import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <div className="sidebar__elements">
          <div className="sidebar__element">
             <a href='https://linkedin.com' target="_blank"><BsLinkedin/></a>
          </div>
          <div className="sidebar__element">
             <a href='https://slack.com' target="_blank"><FaSlack/></a>
          </div>
          <div className="sidebar__element">
            <a href='https://github.com' target="_blank"><FaGithub/></a>
          </div>
          <div className="sidebar__element">
             <a href='https://google.com' target="_blank"><RiGooglePlayFill/></a>
          </div>
          <div className="sidebar__element">
             <a href='https://dribbble.com' target="_blank"><FiDribbble/></a>
          </div>
        </div>
      </div>
  )
}

export default Sidebar