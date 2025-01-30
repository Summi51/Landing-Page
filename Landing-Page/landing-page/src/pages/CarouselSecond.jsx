import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styleone.css";  
import { Pagination } from "swiper/modules";

export default function CarouselSecond() {
  const totalSlides = 2; 
  const imagesPerSlide = 18; 

  const imageUrls = [
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/1.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/2.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/3.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/4.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/5.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/6.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/7.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/8.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/9.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/10.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/11.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/12.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/13.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/14.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/15.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/16.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/17.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/bank/18.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/1.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/2.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/3.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/4.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/5.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/6.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/7.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/8.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/9.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/10.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/11.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/12.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/13.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/14.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/15.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/16.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/17.png",
    "https://campaign.logicloopdigital.com/images/clientsLogo/real-estate/18.png",
  ];

  return (
    <>
    <h1>10 Years Strong, Trust That Goes the Extra Mile</h1>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid-container">
              {imageUrls.slice(slideIndex * imagesPerSlide, (slideIndex + 1) * imagesPerSlide).map((url, index) => (
                <img key={index} src={url} alt={`Slide ${slideIndex} - Img ${index + 1}`} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
