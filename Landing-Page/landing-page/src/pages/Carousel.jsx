import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
  spaceBetween={20}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
  loop={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
  breakpoints={{
    320: { slidesPerView: 1, slidesPerGroup: 1 },  
    768: { slidesPerView: 2, slidesPerGroup: 1 },  
    992: { slidesPerView: 2, slidesPerGroup: 1 }  
  }}
>

        <SwiperSlide><img src="https://campaign.logicloopdigital.com/images/clientSlider/cw1.png" alt="Image 1" /></SwiperSlide>
        <SwiperSlide><img src="https://campaign.logicloopdigital.com/images/clientSlider/cw2.png" alt="Image 2" /></SwiperSlide>
        <SwiperSlide><img src="https://campaign.logicloopdigital.com/images/clientSlider/cw3.png" alt="Image 3" /></SwiperSlide>
        <SwiperSlide><img src="https://campaign.logicloopdigital.com/images/clientSlider/cw4.png" alt="Image 4" /></SwiperSlide>
        <SwiperSlide><img src="https://campaign.logicloopdigital.com/images/clientSlider/cw5.png" alt="Image 5" /></SwiperSlide>
        <SwiperSlide><img src="https://campaign.logicloopdigital.com/images/clientSlider/cw6.png" alt="Image 6" /></SwiperSlide>
        <SwiperSlide><img src="https://campaign.logicloopdigital.com/images/clientSlider/cw7.png" alt="Image 7" /></SwiperSlide>
      </Swiper>

      {/* Custom Navigation */}
      <div className="custom-navigation">
        <div className="custom-prev">&#8678;</div>
        <div className="custom-next">&#8680;</div>
      </div>
    </div>
  );
}
