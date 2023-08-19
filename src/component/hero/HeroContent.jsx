import React from 'react'
import ButtonLink from "../nav/ButtonLink";

function HeroContent({subtext = "SUMMER 2023", header = "NEW COLLECTION", subheader = "We know how large object will act but things on a small scale", className = "hero__content", title = "SHOP NOW"}) {
  return (
    <div className={className}>
       <div className="hero__conatainer">
            <p className='subText'>{subtext}</p>
            <h1 className='hero__header'>{header}</h1>
            <p className='hero__subheader'>
            {subheader}
            </p>
            <ButtonLink className="hero__btn" title={title}/>
      </div>
    </div>
  )
}

export default HeroContent;
