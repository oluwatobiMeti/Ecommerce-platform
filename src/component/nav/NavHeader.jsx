import React from 'react'
import "./navheader.css"
import ContactLink from './ContactLink'
import { BsTelephone, BsTwitter } from "react-icons/bs";
import { AiOutlineMail, AiFillFacebook, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";




function NavHeader() {
  return (
    <div className='nav-header mobile'>
      <div className="nav-header-List-one">
      <ContactLink>
          <BsTelephone/>
          <p>09152446602</p>
      </ContactLink>
      <ContactLink>
          <AiOutlineMail/>
          <p>oluwatobimeatibemu2@gmail.com</p>
      </ContactLink>
      </div>
      <div className="nav-header-List-two">
        <p>follow us and get a chance to get 80% off</p>
      </div>
      <div className="nav-header-social">
        <p>follow us : </p>
        <div className="icon-list">
          <AiOutlineInstagram/>
          <AiFillYoutube/>
          <AiFillYoutube/>
          <BsTwitter/>
        </div>
      </div>
    </div>
  )
}

export default NavHeader
