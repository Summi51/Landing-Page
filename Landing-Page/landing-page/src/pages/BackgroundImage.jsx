import styled from "styled-components";

function BackgroundImage() {
    return (
        <Wrapper>
            {/* Background Image */}
            <img
                src="https://media.istockphoto.com/id/908944958/photo/inspiring-innovation-with-their-every-move.jpg?s=1024x1024&w=is&k=20&c=Tzg7yMGYZB-UxCAwBv7RZdSOU-qVq5r_UFPPCz4kvaU="
                alt="Background"
            />
            
            {/* Overlay & Content */}
            <Content>
                <div className="blur"></div>
                <ContentChild>
                    <h2>We keep hitting milestones on a loop.</h2>
                    <button>Contect Now</button>
                </ContentChild>
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1; 
    }
`;

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    z-index: 1; 
    .blur {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(61, 15, 30, 0.7); 
        z-index: 0;
    }
`;

const ContentChild = styled.div`
    position: relative;
    z-index: 2; 
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
    padding-top: 10vh; 
    width: 90%;

    h2 {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
        background: rgba(0, 0, 0, 0.5); 
        padding: 10px;
        border-radius: 10px;
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
           button:hover {
        background-color: white;
        color: black;
        font-weight: bold;
        font-size: 16px;
        border: 3px solid red;
    }
`;

export default BackgroundImage;
