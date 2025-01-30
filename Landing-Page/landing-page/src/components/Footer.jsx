import styled from "styled-components";

function Footer() {
    return (
        <Wrapper>
            <Content>
                <div>
                    <img src="https://campaign.logicloopdigital.com/images/logo.svg" alt="logo" />
                </div>
                <div className="collection">
                    <div>
                        <h3>MUMBAI</h3>
                        <h4> Premier IT Park, Marol</h4>
                        <h4> MIDC, Andheri East,</h4>
                        <h4>Mumbai, 400093. </h4>
                    </div>
                    <div>
                    <h3>DELHI NCR</h3>
                        <h4>Platina Tower, Mehrauli-</h4>
                        <h4>Gurgaon Rd, Gurugram,</h4>
                        <h4>Haryana 122002</h4>
                    </div>
                    <div>
                    <h3>PUNE</h3>
                        <h4>ABIL Imperial</h4>
                        <h4>Spaces, Baner, Pune</h4>
                        <h4>411045</h4>
                    </div>
                    <div>
                    <h3>BENGALURU</h3>
                        <h4>Mahalakshmi Chambers,</h4>
                        <h4>29, MG Road, Bengaluru,</h4>
                        <h4>560001</h4>
                    </div>
                    <div>
                    <h3>United kIngdom</h3>
                        <h4>26 Oakfield Avenue,</h4>
                        <h4>Harrow, Middlesex,</h4>
                        <h4>England, HA3 8TJ</h4>
                    </div>
                    <div>
                    <h3>dubAI</h3>
                        <h4>Office 0106, Level P3,</h4>
                        <h4>Tower-A, Business Bay -</h4>
                        <h4>Dubai</h4>
                    </div>
                </div>
                <div className="location">
                    chennai | kolkata | hyderabad | ahmedabad
                </div>
                <div className="touch">
                    Get in Touch - +91 91377 41123
                </div>
                {/* Horizontal Line */}
                <div className="line"></div>
                <div className="center">© 2025 Logicloop Digital. All Rights Reserved Powered by: Logicloop</div>
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 100%;
    height: auto;
    background-color: #10375D;
     line-height: 40px;
`;

const Content = styled.div`
    max-width: 92%;
    margin: auto;
    line-height: 40px;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 20px 0; 

    div {
        display: flex;
        align-items: flex-start; 
        margin: 5px 0; 
    }

    div > img {
        display: flex;
        align-items: flex-start; 
    }

    div:nth-child(3) {
        text-align: left; 
    }

    .center {
        text-align: center; 
        width: 100%; 
        margin-top: 20px; 
        color: white; 
        font-size: 19px; 
        display: block; 
    
    }

    .line {
        width: 100%; 
        height: 1px; 
        background-color: #766999; 
        margin: 15px 0; 
    }
    .touch{
    font-size: 19px;
     color: white;
    }

    .location{
     font-size: 19px;
     color: white;
     font-weight: bold;

    }

.collection {
    display: grid;
    grid-template-columns: repeat(6, 1fr); 
    gap: 20px;
}

.collection > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: white;
    line-height: 1.6;
}

.collection h3, .collection h4 {
    margin: 0;
    color: white;
}

.collection h3 {
    font-size: 1.2em;
    font-weight: bold;
}

.collection h4 {
    font-size: 1em;
    font-weight: normal;
}

/* Tablet (min-width: 769px and max-width: 991px) */
@media (min-width: 769px) and (max-width: 991px) {
    .collection {
        grid-template-columns: repeat(3, 1fr); 
    }
}

/* Mobile (max-width: 768px) */

@media (max-width: 768px) {

.collection {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    }

      .collection > div {
       font-size: 12px;
    }
       .location{
         font-size: 15px;
       }

       .touch{
         font-size: 15px;
       }

       .center{
         font-size: 15px;
       }
}

`;

export default Footer;
