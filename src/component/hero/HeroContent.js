import React from 'react'

function HeroContent({img = img, subtext = "SUMMER 2023", header = "NEW COLLECTION", subheader = "We know how large object will act but things on a small scale", alt = "a woman holding a shopping bag after shopping", className = "hero__content", title = "SHOP NOW"}) {
  return (
    <div className={className}>
        <p className='subText'>{subtext}</p>
        <h1 className='hero__header'>{header}</h1>
        <p className='hero__subheader'>
        {subheader}
        </p>
        <ButtonLink className="hero__btn" title={title}/>
      </div>
  )
}

export default HeroContent
