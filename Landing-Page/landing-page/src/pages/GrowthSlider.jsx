import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./stylethree.css";

export default function GrowthSlider() {
  return (
    <div className="mobile-container">
      <Swiper
        direction="vertical" // Vertical scrolling
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-scroll
        loop={true}
        slidesPerView={1} // Only 1 item at a time
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mid">
            <img
              src="https://campaign.logicloopdigital.com/images/icon/toolsIcon1.svg"
              alt="Triplead"
            />
            <h2>Triplead</h2>
            <p>
              Advance marketing automation tool to extract the best ROI out of the leads generated
              through our campaigns. Our creative strategists ensure that we use a curated
              communication strategy to minimize leakages and optimize conversion rate.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mid">
            <img
              src="https://campaign.logicloopdigital.com/images/icon/toolsIcon2.svg"
              alt="Pulseboard"
            />
            <h2>Pulseboard</h2>
            <p>
              Provides a unified dashboard of all media platforms. Thereby enabling marketers and
              businesses to dive deeper into analytics to take informed business decisions.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mid">
            <img
              src="https://campaign.logicloopdigital.com/images/icon/toolsIcon3.svg"
              alt="Effisurge"
            />
            <h2>Effisurge</h2>
            <p>
              An advanced eCommerce optimization engine that accelerates growth by automating key
              workflows and improving efficiency.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
