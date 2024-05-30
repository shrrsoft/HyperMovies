import { register } from 'swiper/element/bundle';
register();
import React, { useState } from 'react'



export default function HeaderSlider({setBg}) {

  return (
    <div className="mt-12 text-center" >

        <swiper-container class="mySwiper"
                         Navigation="true" 
                         space-between="30"  
                         slides-per-view="4" 
                         loop="true" 
                         autoplay="true"
                         >
            <swiper-slide><img onMouseOver = {(e) => setBg('src/assets/slider images/1.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/1.jpg" alt="" /></swiper-slide>
            <swiper-slide><img onMouseOver = {(e) => setBg('src/assets/slider images/2.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/2.jpg" alt="" /></swiper-slide>
            <swiper-slide><img onMouseOver = {(e) => setBg('src/assets/slider images/3.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/3.jpg" alt="" /></swiper-slide>
            <swiper-slide><img onMouseOver = {(e) => setBg('src/assets/slider images/4.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/4.jpg" alt="" /></swiper-slide>
            <swiper-slide><img onMouseOver = {(e) => setBg('src/assets/slider images/5.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/5.jpg" alt="" /></swiper-slide>
            <swiper-slide><img onMouseOver = {(e) => setBg('src/assets/slider images/6.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/6.jpg" alt="" /></swiper-slide>
            <swiper-slide><img onMouseOver = {(e) => setBg('src/assets/slider images/7.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/7.jpg" alt="" /></swiper-slide>
        </swiper-container>
    </div>
  )
}
