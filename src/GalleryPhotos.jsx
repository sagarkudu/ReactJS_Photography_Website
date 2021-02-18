import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

import "./index.css";

function GalleryPhotos() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <br/>
      <center><button type="button" className="service-btn"><a className="no-text-decoration" href="https://wa.me/919421392873?text=Hello%20Bhavesh!%20Please%20send%20the%20best%20Quotation">BOOK NOW</a></button></center>
      <br/>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway> <br/>
      <center><button type="button" className="service-btn"><a className="no-text-decoration" href="https://wa.me/919421392873?text=Hello%20Bhavesh!%20Please%20send%20the%20best%20Quotation">BOOK NOW</a></button></center>
      <br/>
    </div>
    
  );
}



export default GalleryPhotos;
