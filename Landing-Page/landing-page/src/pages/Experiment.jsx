import styled from "styled-components";
import Carousel from "./Carousel";
import './style.css'

function Experiment(){
    return (
        <Wrapper>
            <Content>
                <div>
                    <h1 className="experiment">Why Experiment?</h1>
                    <h1 className="expert">Trust Experts Who <br />Deliver Results</h1>
                   
<input type="text" placeholder="Enter your Mobile Number"/> <br />
<button>Get In Touch</button>
                </div>
                <div>
                    <Carousel/>
                </div>
            </Content>

            
            {/* mobile */}

            <Content1>
                <div>
                    <h1 className="experiment">Why Experiment?</h1>
                    <h1 className="expert">Trust Experts Who <br />Deliver Results</h1>
                   
<input type="text" placeholder="Enter your Mobile Number"/> <br />
<button>Get In Touch</button>
                </div>
                <div>
                    <Carousel/>
      
                    
                </div>
            </Content1>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    max-width: 100%;
    height: auto;
    // border: 2px solid red;
`;

const Content = styled.div`
    max-width: 92%;
    margin: auto;
    line-height: 40px;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 0; 
//   border: 2px solid green;

  div{
    // border: 2px solid green;
   
  }
  
button {
    padding: 10px 10px;
    width: 160px;
    border-radius: 30px;
    border: none;
    background-color: #12375D;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    display: flex; 
    justify-content: center; 
    text-align: center; 
    white-space: nowrap;
    align-items: center;
    margin-left: 80px; 
    //  float: left;  
}

button:hover {
    background-color: white;
    color: #12375D;
    font-weight: bold;
    font-size: 16px;
    border: 3px solid #12375D;
}

.experiment {
    color: #12375D;
    font-size: 40px;
    display: flex;
    text-align: left;
    line-height: 2px;
    margin-left: 80px;
}

.expert {
    color: #E01484;
    font-size: 39px;
    display: flex;
    text-align: left;
    line-height: 60px;
    margin-left: 80px;
}

input {
    width: 56%;
    padding: 10px;
    display: flex;
    font-size: 20px;
    text-align: left;  
    border-radius: 8px;
    margin-left: 80px;
}

@media (min-width: 769px) and (max-width: 991px) {
   display: block;
 margin: auto;
   button {
    margin-bottom:20px
}

.expert {

}

}

@media (max-width: 768px) 
{
    display: none;
}

`;

const Content1 = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column; 
 margin: auto;
    .experiment, .expert {
      margin-left: 0;
      margin-bottom: 10px; 
      text-align: center; 
    }

    button {
    padding: 10px 10px;
    width: 160px;
    border-radius: 30px;
    border: none;
    background-color: #12375D;
    color: white;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-bottom: 20px;
    justify-content: center; 
    text-align: center; 
    white-space: nowrap;
    align-items: center;
}

button:hover {
    background-color: white;
    color: #12375D;
    font-weight: bold;
    font-size: 16px;
    border: 3px solid #12375D;
}

.experiment {
    color: #12375D;
    font-size: 30px;
}

.expert {
    color: #E01484;
    font-size: 30px;
    text-align: center;
}

input {
    width: 60%;
    padding: 10px;
    display: flex;
    font-size: 15px;
    text-align: left;  
    border-radius: 8px;
    margin-left: 80px;
}

    .swiper-container {
      width: 100%; 
    }
  }

    @media (min-width: 769px) and (max-width: 991px), (min-width: 992px) {
        display: none;
    }
`;



export default Experiment