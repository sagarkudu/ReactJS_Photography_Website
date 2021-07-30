import React from "react";
import CommonData from "../common/CommonData";
import bhavesh_photo from "../../images/bhavesh_photo.png";

const Home = () => {
  return (
    <>
      <CommonData
        name="Hire a Photographer @"
        imgsrc={bhavesh_photo}
        visit="/services"
        btname="Check Gallery"
      />
    </>
  );
};

export default Home;
