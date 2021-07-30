import React, { useEffect, useState } from "react";
import "../gallery/gallery.css";
import { photosdata } from "./../../api/photosdata";
import { SRLWrapper } from "simple-react-lightbox";

import CategoryButton from "./CategoryButton";

import LazyImage from "./LazyImage";

const Gallery = () => {
  const [category, setCategory] = useState("prewedding");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(
    () => {
      category === "all"
        ? setFilteredImages(photosdata)
        : setFilteredImages(
            photosdata.filter((image) => image.category === category),
          );
    },
    [category],
    [],
  );

  return (
    <>
      <div>
        <div className="categories ">
          <CategoryButton
            categoryName="prewedding"
            categoryActive={category === "prewedding" ? true : false}
            handleSetCategory={setCategory}
          />{" "}
          /
          <CategoryButton
            categoryName="wedding"
            categoryActive={category === "wedding" ? true : false}
            handleSetCategory={setCategory}
          />{" "}
          /
          <CategoryButton
            categoryName="candid"
            categoryActive={category === "candid" ? true : false}
            handleSetCategory={setCategory}
          />{" "}
          /
          <CategoryButton
            categoryName="baby"
            categoryActive={category === "baby" ? true : false}
            handleSetCategory={setCategory}
          />{" "}
          /
          <CategoryButton
            categoryName="studio"
            categoryActive={category === "studio" ? true : false}
            handleSetCategory={setCategory}
          />{" "}
          /
          <CategoryButton
            categoryName="modelling"
            categoryActive={category === "modelling" ? true : false}
            handleSetCategory={setCategory}
          />{" "}
          /
          <CategoryButton
            categoryName="all"
            categoryActive={category === "all" ? true : false}
            handleSetCategory={setCategory}
          />{" "}
        </div>
        <SRLWrapper>
         
          <div className="container_image1 masonry">
            {filteredImages.map((image) => (
             
                <div key={image.id}>
                  <a href={`/images/${image.imageName}`}>
                    <div className="item">
                      <LazyImage
                        effect="blur"
                        src={`/images/${image.imageName}`}
                        alt=""
                      />
                    </div>
                  </a>
                </div>
    
            ))}
          </div>
        </SRLWrapper>
      </div>
    </>
  );
};

export default Gallery;
