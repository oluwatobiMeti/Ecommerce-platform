import React from 'react'
import "./hero.css";
import ButtonLink from '../nav/ButtonLink';

import Slider from 'react-slick';
import img from "../../images/shop-hero.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carosel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
       <Hero img={img} alt="a woman with a bag after shopping"/>
       <Hero img={img} alt="a woman with a bag after shopping"/>
    </Slider>
  )
}

function Hero() {
  return (
    <div className="hero">
    <Carosel/>
    </div>
  )
}

export default Hero
