import React from "react";
import "./Gallery.css";

const Gallery = () => {
  const images = [
    "../Assets/mandir 1.jpg",
    "../Assets/mandir 2.jpg",
    "../Assets/mandir 3.jpeg",
    "../Assets/mandir 4.jpg",
    "../Assets/mandir 7.jpg",
    "../Assets/mandir 6.jpg"
  ];

  return (
    <section className="gallery-section animate-left" id="gallery">
      <h2>Temple Gallery</h2>
      <div className="gallery-grid animate-right">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Temple view ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
