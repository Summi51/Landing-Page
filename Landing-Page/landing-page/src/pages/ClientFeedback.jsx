import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styletwo.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function ClientFeedback() {
  const totalSlides = 5;

  // Video URLs (YouTube embed links)
  const videoUrls = [
    "https://www.youtube.com/embed/OPj7em-UkpY",
    "https://www.youtube.com/embed/42i2OhW4Q7c",
    "https://www.youtube.com/embed/d7gXw_IjNO0",
    "https://www.youtube.com/embed/9EDYaCMHjKU",
    "https://www.youtube.com/embed/NPPUfe-FQzU",
  ];

  // Images corresponding to each video (one for each slide)
  const backgroundImages = [
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    "https://img.freepik.com/free-photo/abstract-luxury-soft-red-background-christmas-valentines-layout-design-studio-room-web-template-business-report-with-smooth-circle-gradient-color_1258-54521.jpg?semt=ais_hybrid",
    "https://plus.unsplash.com/premium_photo-1661427118169-7c3301cd8749?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://s.saregama.com/image/s/fh_600/5/21/bb/carvaanframe_10_1672650646.png?v=12",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlUVp1g5RaKnfimJ5t7x_k7HmEOZNbFcO4Q&s",
  ];

  const [activeVideo, setActiveVideo] = useState(null);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);

  const handleVideoStart = (index) => {
    setActiveVideo(index);
    setIsAutoplayActive(false); 
  };

  const handleVideoEnd = () => {
    setActiveVideo(null);
    setIsAutoplayActive(true); 
  };

  return (
    <>
      <h1>Client Feedback</h1>
      <Swiper
        spaceBetween={20}
        autoplay={isAutoplayActive ? { delay: 2500, disableOnInteraction: false } : false}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
        breakpoints={{
          // Mobile view
          768: {
            autoplay: { delay: 2500, disableOnInteraction: false },
          },
          // Desktop and larger
          992: {
            autoplay: false,
          },
        }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="video-container">
              <div
                className="background-image"
                style={{
                  backgroundImage: `url(${backgroundImages[slideIndex]})`,
                }}
              >
                {!activeVideo && (
                  <div
                    className={`play-icon ${activeVideo === slideIndex ? "active" : ""}`}
                    onClick={() => handleVideoStart(slideIndex)}
                  >
                    <span className="play-btn">▶</span>
                  </div>
                )}
              </div>
              {activeVideo === slideIndex && (
                <iframe
                  width="100%"
                  height="315"
                  src={videoUrls[slideIndex]}
                  title={`Video ${slideIndex + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => {
                    const iframe = document.querySelector(`iframe[src="${videoUrls[slideIndex]}"]`);
                    iframe?.contentWindow?.postMessage('{"event":"command","func":"addEventListener","args":["onStateChange"]}', '*');
                  }}
                  onStateChange={(event) => {
                    if (event.data === 0) {
                      handleVideoEnd();
                    }
                  }}
                ></iframe>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
