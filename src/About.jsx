import React from 'react';
// import aboutPhoto from "../src/images/camera.png";
import aboutPhoto from "../src/images/about2.jpg";

import Comman from './Common';

const About = () => {
  
    return(
        <>  
            <Comman
                name="Hurry! Limited Offer is going on..."
                imgsrc={aboutPhoto} 
                visit="/contact"
                btname="Contact Now"
            />
            
        </>
    );
}

export default About;