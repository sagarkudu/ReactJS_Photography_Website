import React from "react";
import bhavesh_photo from "../../images/bhavesh_photo.png";
import CommonData from './../common/CommonData';

const About = () => {
  return (
    <>
      <CommonData
        name="I am a Professional Photographer!"
        imgsrc={bhavesh_photo}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
