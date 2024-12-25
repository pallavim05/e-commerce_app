import React from 'react';
import Slider from "react-slick";
import './index.css';
import Slide1 from '../../../assets/images/slideBanner1.jpg';
import Slide2 from '../../../assets/images/slideBanner2.jpg';


const HomeSlider=()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true
      };
    return(
        <section className='homeSlider'>
            <div className='container-fluid'>
            <Slider {...settings} className='home_slider_main'>
                <div className='item'>
                    <img src={Slide1} className='w-100' />
                    
                </div>
                <div className='item'>
                    <img src={Slide2} className='w-100'/>
                    
                </div>
      
    </Slider>

            </div>
        </section>
    )

}
export default HomeSlider;