import React from 'react';
import Slider from "react-slick";

import ava01 from '../../../Assets/ava01.jpg';
import ava02 from '../../../Assets/ava02.jpg';
import ava03 from '../../../Assets/ava03.jpg';

import '../../../styles/slider.css'

const TestimonialSlider = () => {

    const settings ={
        dots:true,
        autoplay:true,
        infinite:true,
        speed:1000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:1,
        slidesToScroll:1
    }
    return <Slider {...settings} className="mb-5">
        <div className='ava01'>
            <p className="review__test">Ellies have gat the best customer that can't stop 
            coming or ordering. I can't get enough of their super-delicious food, just keep being in existence. MY ELLIES!
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava01} alt="avatar"  className='w-25 rounded'/>
                <h6>Min Yunki</h6>
            </div>
          </div>
          <div className='ava02'>
          <p className="review__test">I can't stop ordering food from Ellies, and I won't. Maybe someone out there 
          haven't heard about Ellies resturant, I need to let them know. 
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava02} alt="avatar" className='w-25 rounded' />
                <h6>Kim Namjun</h6>
            </div>         
             </div>
          <div className='ava03'>
            <p className="review__test">My first Ellies' food taste like an heavenly one. I don't think I can stop ordering from Ellies restaurant, 
            they've gat the magnet pulling me towards their spicies.
            </p>
            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava03} alt="avatar" className='w-25 rounded'/>
                <h6>Kim Taehyung</h6>
            </div>          
            </div>

    </Slider>
}



export default TestimonialSlider;