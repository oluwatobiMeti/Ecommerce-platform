import React from 'react'
import "./hero.css";
import Slider from 'react-slick';
import HeroContent from './HeroContent';
import img from "../../images/shop-hero.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroContentTwo from './HeroContentTwo';

function Carosel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="carosel">
      <Slider {...settings}>
         <HeroContent/>
         <HeroContent/>
         <HeroContentTwo/>
      </Slider>
    </div>
  )
}

function Hero() {
  return (
    <div className="hero">
    <Carosel/>
    </div>
  )
}

export default Hero;