import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Profile from '../../assets/images/profile.jpg'
import './feed.css'
import SocialLinks from './SocialLinks'
import Experience from '../experience/Experience'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'
import Testimonials from '../testimonials/Testimonials'
import Contacts from '../contacts/Contacts'
const Feed = () => {
  return (
    <div className='feed__container'>
      <div className="feed__header">
        <div className="feed__header-elements">
          <h4>Hello,</h4>
          <h1>Belay Birhanu Gibina</h1>
            <h4>Fullstack Devloper</h4>
        </div> 
      </div>
        <div className="container main__feed">
        <div className='profile__description'>
          <div className="feed__body-contents">
            <article className="feed__body-content">
              <FaAward className='feed__icon'/>
               <h5>Experience</h5>
               <small>3+ Years of Exprience</small>
            </article>
            <article className="feed__body-content">
              <FiUsers className='feed__icon'/>
               <h5>Clients</h5>
               <small>200+ Worldwide</small>
            </article>
            <article className="feed__body-content">
              <VscFolderLibrary className='feed__icon'/>
               <h5>Projects</h5>
               <small>10+ Completed</small>
            </article>
         </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nisi veniam aliquid in natus labore qui deleniti voluptatum quo inventore. Impedit, nemo. Accusamus veritatis error dolor pariatur sapiente delectus dicta.</p>
         <a href='#contacts' className='btn btn-primary custom__primary'>Contact Me</a>
        </div>
        <div className='profile__images'>
            <div className="feed__images">
            <div className="feed__image">
              <img src={Profile} alt="My profile"/>
          </div>
        </div>
      </div>
    </div>
    <div className='feed__elements'>
        <SocialLinks/>
        <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <Contacts/>
    </div>
  </div>
  )
}

export default Feed