import { register } from 'swiper/element/bundle';
register();



export default function HeaderSlider({setBg}) {

  return (
    <div className="mt-8 text-center" >

        <swiper-container class="mySwiper" Navigation="true"  loop="true" autoplay="true"
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
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                }
                            }) 
                          }
                                            >
            <swiper-slide><img className='mx-auto' onMouseOver = {(e) => setBg('src/assets/slider images/1.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/1.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className='mx-auto' onMouseOver = {(e) => setBg('src/assets/slider images/2.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/2.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className='mx-auto' onMouseOver = {(e) => setBg('src/assets/slider images/3.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/3.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className='mx-auto' onMouseOver = {(e) => setBg('src/assets/slider images/4.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/4.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className='mx-auto' onMouseOver = {(e) => setBg('src/assets/slider images/5.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/5.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className='mx-auto' onMouseOver = {(e) => setBg('src/assets/slider images/6.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/6.jpg" alt="" /></swiper-slide>
            <swiper-slide><img className='mx-auto' onMouseOver = {(e) => setBg('src/assets/slider images/7.jpg')} onMouseLeave={(e) =>setBg('src/assets/background image/background.jpg')} src="/src/assets/slider images/7.jpg" alt="" /></swiper-slide>
        </swiper-container>
    </div>
  )
}



        