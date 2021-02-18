import React from 'react';
import myimg from "../src/images/camera.png";
import Common from './Common';

const Home = () => {
  
    return(
        <>  
           <Common
                name="We Capture Your Memories!"
                imgsrc= {myimg} 
                visit="/gallery"
                btname="Check Gallery"
            />
        </>
    );
}

export default Home;