import React from "react";
import servicesdata from "../../api/servicesdata";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"></div>
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto my-auto">
            <div className="row gy-4">
              {servicesdata.map((value, index) => {
                //return card component one by one.
                return (
                  <Card
                    //passing unique key
                    key={index}
                    //passing all array data of Card
                    imgsrc={value.imgsrc}
                    title={value.title}
                    description={value.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
