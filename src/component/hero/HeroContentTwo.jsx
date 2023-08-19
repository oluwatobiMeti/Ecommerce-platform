import React from 'react'
import ButtonLink from '../nav/ButtonLink'
import img from "../../images/technology 1.png"

function HeroContentTwo() {
  return (
    <div className='hero-content-two'>
      <div className="hero-two-container">
        <div className="hero-two-content">
           <h5 className="subtext">
              SUMMER 2020
           </h5>
           <h1 className="Header">
              NEW COLLECTION
           </h1>
           <h4 className="sub-header">
           We know how large objects will act, but things on a small scale.
           </h4>
           <ButtonLink className="Btn" title="Shop Now"/>
        </div>
        <div className="hero-two-image">
             <img src={img} alt="a lady smile and holding her hair"/>
        </div>
      </div>
    </div>
  )
}

export default HeroContentTwo
