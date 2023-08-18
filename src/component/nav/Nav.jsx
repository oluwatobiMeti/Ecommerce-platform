import React, { useState } from 'react';
import "./nav.css"
import {BiMenuAltRight} from "react-icons/bi"
import NavContainer from './NavContainer';
import NavHeader from './NavHeader';
import Store from './Store';


function Nav() {
  const [show, setShow] = useState(false);
  return (
    <div className="nav__con">
      <NavHeader/>
      <div className='nav'>
        <div className="nav-container">
        <span className='logo'>BrandName</span>
        <NavContainer className="nav__container"/>
        </div>
        <div className="mobile-view">
          <Store/>
          <BiMenuAltRight onClick={() => setShow(!show)} className="menu-icon"/>
        </div>
      </div>
      {
        show &&
        <NavContainer className="mobile__nav"/>
        }
    </div>

  )
}

export default Nav
