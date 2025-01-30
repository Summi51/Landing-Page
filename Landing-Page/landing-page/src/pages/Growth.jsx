import styled from "styled-components";

function Growth() {
    return (
        <Wrapper>
            <Content>
                <div className="main">
                    <div className="image-container">
                        <img width='100%' src="https://campaign.logicloopdigital.com/images/pinCtaImg.png" alt="growth" />
                    </div>
                    <div className="main-child">
                        <h1>
                            It’s More Than Growth. <br />
                            It’s ROI That Lasts.
                        </h1>
                        <button>Let's Build Together</button>
                    </div>
                </div>
<h1>Our Tools That Drive Performance</h1>
                <div className="mid">
                 <div>
                    <img src="https://campaign.logicloopdigital.com/images/icon/toolsIcon1.svg" alt="" />
                    <h2>Triplead</h2>
                    <p>
                    Advance marketing automation tool to extract the best ROI out of the leads generated through our campaigns. Our creative strategists ensure that we use a curated communication strategy to minimize leakages and optimize conversion rate.
                    </p>
                 </div>
                 <div>
                 <img src="https://campaign.logicloopdigital.com/images/icon/toolsIcon2.svg" alt="" />
                    <h2>Pulseboard</h2>
                    <p>Provides a unified dashboard of all media platforms. Thereby enabling marketers and businesses to dive deeper into analytics to take informed business decisions.</p>
                 </div>
                 <div>
                 <img src="https://campaign.logicloopdigital.com/images/icon/toolsIcon3.svg" alt="" />
                    <h2>Effisurge</h2>
                    <p>An advanced eCommerce optimization engine that accelerates growth by automating key workflows and improving efficiency. It fine-tunes campaigns with precision, reallocates budgets dynamically, and ensures seamless catalog management. Designed for businesses aiming to stay ahead in competitive markets, it delivers actionable insights, enabling rapid adjustments and maximizing profitability with minimal effort.</p>
                 </div>
                </div>
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: #10375D; 
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
    background-color: #E01484;  
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;      
    width: 46%;  
  }

  h1 {
    font-size: 2.8rem;
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
//   justify-content: center; 
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.1); 
  color: white; 
  padding: 30px;
  
  height: 500px !important; 
  width: 50%; 
  border-radius: 8px; 
  border: 1px solid white;
}
.mid > div:hover{
background-color: #E01484;
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
  line-height:30px;
  margin: 0;
  text-align: left; 
  color: white;
}

/* Tablet (max-width: 991px) */
@media (max-width: 991px) {
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

  .mid {
    flex-direction: column; 
    align-items: center;
  }

  .mid > div {
    width: 100%; 
    height:100px;
    padding: 20px;
  }
}

/* Mobile (max-width: 768px) */
@media (max-width: 768px) {
  .main {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-container {
    width: 100%;
    margin-bottom: 20px;
  }

  .main-child {
    width: 100%;
    padding: 20px;
  }

  h1 {
    font-size: 1.3rem; 
  }

  button {
    width: 60%; 
  }

  .mid {
    flex-direction: column;
    align-items: center;
  }

  .mid > div {
    width: 100%;
    height: auto;
    padding: 15px;
  }

  .mid h2 {
    font-size: 1.5rem; 
  }

  .mid p {
    font-size: 18px;
  }
}

`;

export default Growth;
