import React from 'react'
import MoviesCard from '../Movies/MoviesCard'

export default function MoviesList() {
  return (
    <>
    <div>
    <swiper-container  loop="true" autoplay="true" 
                          breakpoints={
                            JSON.stringify({

                                640:{
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                              
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                              
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                }
                            }) 
                          }
                                            >
            <swiper-slide><MoviesCard movieName={"Jaws"} imgSrc={"/src/assets/slider images/5.jpg"} point={8.1} /></swiper-slide>
            <swiper-slide><MoviesCard movieName={"Iron Man"} imgSrc={"/src/assets/slider images/6.jpg"} point={7.8} /></swiper-slide>
            <swiper-slide><MoviesCard movieName={"Spider Man"} imgSrc={"/src/assets/slider images/7.jpg"} point={8.3} /></swiper-slide>
            <swiper-slide><MoviesCard movieName={"The Dark Knight"} imgSrc={"/src/assets/slider images/1.jpg"} point={9.0} /></swiper-slide>
            <swiper-slide><MoviesCard movieName={"Thief"} imgSrc={"/src/assets/slider images/2.jpg"} point={7.4} /></swiper-slide>
            <swiper-slide><MoviesCard movieName={"LALA LAND"} imgSrc={"/src/assets/slider images/3.jpg"} point={8.7} /></swiper-slide>
            <swiper-slide><MoviesCard movieName={"Squid Game"} imgSrc={"/src/assets/slider images/4.jpg"} point={8.9} /></swiper-slide>
        </swiper-container>
    </div>
    </>
  )
}
