import styled from "styled-components";

function Navbar() {
    return (
        <Wrapper>
            <Content>
                <Childfirst>
                    <img width="198px" src="https://campaign.logicloopdigital.com/images/logo.svg" alt="Logo" />
                </Childfirst>

                <Childsecond>
                    <SubChild>
                        <img src="https://campaign.logicloopdigital.com/images/icon/call.svg" alt="call" />
                        <h4>+91 91377 41123</h4>
                        <button>Book an Audit Session</button>
                    </SubChild>

    {/*  for mobile only */}
                    <SubChildmob>

                        <button>
                            <div>
                            <img src="https://campaign.logicloopdigital.com/images/icon/call.svg" alt="call" />
                            <h5>+91 91377 41123</h5>
                            </div>
                        </button>
                    </SubChildmob>
                </Childsecond>
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 100%;
    height: 65px;
    background-color: #10375D;

`;

const Content = styled.div`
    max-width: 92%;
    margin: auto;
    height: auto;
    display: flex;
    justify-content: space-between; 
    align-items: center;

`;

const Childfirst = styled.div`
    display: flex;
    align-items: center;
       @media (max-width: 768px) {
        img {
        width: 80%
        }
    }
`;

const Childsecond = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 50%; 
`;

const SubChild = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    width: 100%;
    gap: 10px; 

    img {
        margin-right: 5px;
    }

    h4 {
        color: white;
        white-space: nowrap;
        font-size: 18px;
        margin: 0;
    }

    button {
        padding: 12px 10px;
        width: 230px;
        border-radius: 30px;
        border: none;
        background-color: #E01484;
        color: white;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
        white-space: nowrap;
    }

    button:hover {
        background-color: white;
        color: black;
        font-weight: bold;
        font-size: 16px;
        border: 3px solid red;
    }

    @media (min-width: 769px) and (max-width: 991px) {
        width: 50%; 
        justify-content: flex-end;

        h4 {
            font-size: 17px;
        }

        button {
            width: 210px;
            font-size: 15px;
            padding: 10px;
        }
    }
  @media (max-width: 768px) {
        display: none; 
    }
`;

const SubChildmob = styled.div`
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center; 
    }

    @media (min-width: 769px) and (max-width: 991px), (min-width: 992px) {
        display: none;
    }

    button {
        padding: 7px 15px;
        width: 200px;
        height: 50px;
        border-radius: 30px;
        border: none;
        background-color: #E01484;
        color: white;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
        white-space: nowrap;
        margin-top: 10px; 
    }

    button > div {
    display: flex;
   justify-content: space-between;
   text-aligns: center;
   padding-top: 9px
    }
   
    img {
 margin-bottom: 10px;
    background-color: transparent;
    filter: invert(100%) brightness(100%) grayscale(100%);
}

    h5 {
        color: white;
        font-size: 18px;
        margin: 0;
    }
`


export default Navbar;


