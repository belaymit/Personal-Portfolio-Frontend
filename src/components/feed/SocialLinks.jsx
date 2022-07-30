import React from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

import './feed.css'

const SocialLinks = () => {
    const [activeNav, setActiveNav] = useState('#');
  return (
    <div className='social__links'>
        <div className="social__link">
            <a href='#' onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active': ''}><AiOutlineHome/></a>
            <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active': ''}><AiOutlineUser/></a>
            <a href='#experience'  onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active': ''}><BiBook/></a>
            <a href='#services'  onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active': ''}><RiServiceLine/></a>
            <a href='#contact'  onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active': ''}><BiMessageSquareDetail/></a>
        </div>
    </div>
  )
}

export default SocialLinks