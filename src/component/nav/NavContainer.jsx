import React from 'react'
import LinkComp from './LinkComp';
import Dropdown from './Dropdown';
function NavContainer({className}) {
  return (
    <div className={`${(className === "nav__container")?"nav__container":"mobile__nav"}`}>
       <LinkComp to="/" title="Home"/>
       <Dropdown/>
       <LinkComp to="/About" title="About"/>
       <LinkComp to="/Blog" title="About"/>
       <LinkComp to="/Cantact" title="About"/>
       <LinkComp to="/pages" title="About"/>
    </div>
  )
}

export default NavContainer
