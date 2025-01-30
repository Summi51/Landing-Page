

import BackgroundImage from "../pages/BackgroundImage"
import CarouselSecond from "../pages/CarouselSecond"
import ClientFeedback from "../pages/ClientFeedback"
import Experiment from "../pages/Experiment"
import Growth from "../pages/Growth"

function LandingPage(){
    return (
        <div>
            <Experiment />
            <BackgroundImage />
            <CarouselSecond/>
            <Growth/>
            <ClientFeedback/>
        </div>
    )
}

export default LandingPage