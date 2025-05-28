// src/Components/ImageSlider.jsx

import React, { useState, useEffect } from 'react';
import './Components.scss'; // Ensure this path is correct

const images = [
 '../assets/images/img1.jpg',
 '../assets/images/img2.jpg',
 '../assets/images/img3.jpg',

  // Add more image paths as needed
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
    </div>
  );
};

export default ImageSlider;