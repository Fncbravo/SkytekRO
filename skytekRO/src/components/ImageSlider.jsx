
// src/components/ImageSlider.js

// import React, { useState } from "react";
// import "./"; // You can add styles here

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <button onClick={goToPrevious} className="slider-btn prev-btn">
        ❮
      </button>
      <img
        src={images[currentIndex]}
        alt={`slide ${currentIndex}`}
        className="slider-image"
      />
      <button onClick={goToNext} className="slider-btn next-btn">
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
