import styled from "styled-components";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

function Growth() {
  return (
    <Wrapper>
      <Content>
        <div className="main">
          <div className="image-container">
            <img
              width="100%"
              src="https://campaign.logicloopdigital.com/images/pinCtaImg.png"
              alt="growth"
            />
          </div>
          <div className="main-child">
            <h1>
              It’s More Than Growth. <br /> It’s ROI That Lasts.
            </h1>
            <button>Let's Build Together</button>
          </div>
        </div>
        <h1 className="hTool">Our Tools That Drive Performance</h1>

        {/* Desktop View */}
        <div className="mid desktop-view">
          {["Triplead", "Pulseboard", "Effisurge"].map((title, index) => (
            <div key={index}>
              <img
                src={`https://campaign.logicloopdigital.com/images/icon/toolsIcon${index + 1}.svg`}
                alt=""
              />
              <h2>{title}</h2>
              <p>
                {index === 0
                  ? "Advance marketing automation tool to extract the best ROI out of the leads generated through our campaigns."
                  : index === 1
                  ? "Provides a unified dashboard of all media platforms, enabling marketers and businesses to take informed business decisions."
                  : "An advanced eCommerce optimization engine that accelerates growth by automating key workflows and improving efficiency."}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Swiper View */}
        <div className="mid mobile-view">
        <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  loop={true}
  slidesPerView={1}
  spaceBetween={10} 
>

            {["Triplead", "Pulseboard", "Effisurge"].map((title, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <img
                    src={`https://campaign.logicloopdigital.com/images/icon/toolsIcon${index + 1}.svg`}
                    alt=""
                  />
                  <h2>{title}</h2>
                  <p>
                    {index === 0
                      ? "Advance marketing automation tool to extract the best ROI out of the leads generated through our campaigns."
                      : index === 1
                      ? "Provides a unified dashboard of all media platforms, enabling marketers and businesses to take informed business decisions."
                      : "An advanced eCommerce optimization engine that accelerates growth by automating key workflows and improving efficiency."}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #10375d;
`;

const Content = styled.div`
  max-width: 92%;
  padding-top: 20px;
  margin: auto;
  padding-bottom: 20px;

  .main {
    display: flex;
    justify-content: flex-start;
  }

  .image-container {
    width: 46%;
    margin-right: 10px;
  }

  .main-child {
    background-color: #e01484;
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 46%;
  }

  h1 {
    font-size: 2.2rem;
    margin-bottom: 20px;
    color: white;
    text-align: left;
  }

  button {
    padding: 12px 10px;
    width: 220px;
    border-radius: 30px;
    border: none;
    background-color: white;
    color: #E01484;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    
  }

  button:hover {
    background-color: pink;
    color: black;
    font-weight: bold;
    font-size: 18px;
    border: 3px solid white;
  }


  .mid {
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 13px;
    align-items: stretch;
  }

  .mid > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 30px;
    height: 500px;
    width: 50%;
    border-radius: 8px;
    border: 1px solid white;
  }

  .mid > div:hover {
    background-color: #e01484;
  }

  .mid img {
    width: 50px;
    height: 50px;
  }

  .mid h2 {
    font-size: 2rem;
    margin: 0;
    color: white;
  }

  .mid p {
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    text-align: left;
    color: white;
  }

  /* Hide mobile view Swiper on Desktop */
  .mobile-view {
    display: none;
  }

  /* Mobile (max-width: 767px) */
  @media (max-width: 767px) {
    .main {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .image-container {
      width: 100%;
      margin-right: 0;
    }

    .main-child {
      width: 100%;
      padding: 30px;
    }

    .desktop-view {
      display: none;
    }

    .mobile-view {
      display: block;
      width: 100%;
    }

    // .swiper-slide .slide-content {
    //   display: flex;
    //   flex-direction: column;
    //   align-items: center;
    //   background-color: rgba(255, 255, 255, 0.1);
    //   color: white;
    //   padding: 30px;
    //   height: auto;
    //   width: 100%;
    //   border-radius: 8px;
    //   border: 1px solid white;
    //   text-align: center;
    // }

.swiper-slide .slide-content {
  display: flex;
  flex-direction: column;
  align-items: left;
//   justify-content: center; 
//   background-color: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 30px;
  height: auto;
  width: 500px; 
  max-width: 80%; 
  border-radius: 8px;
//   border: 1px solid white;
  text-align: left;
//   margin: auto; 
}

    .swiper-slide img {
      width: 50px;
      height: 50px;
    }

    .swiper-slide h2 {
      font-size: 1.5rem;
      margin: 0;
      color: white;
    }

    .swiper-slide p {
      font-size: 15px;
      line-height: 22px;
      margin: 0;
      color: white;
    }


  h1 {
    font-size: 1.6rem;
    margin-bottom: 20px;
    color: white;
    text-align: left;
  }

  button {
    padding: 10px 10px;
    width: 200px;
    border-radius: 30px;
    border: none;
    background-color: white;
    color: #E01484;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
    
  }

  .hTool {
    font-size: 1.6rem;
  }

  }
`;

export default Growth;
