import React, { useState, useEffect } from 'react';
import '../pagesCss/HvtCarousel.css';

const HvtCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/new1.jpeg",
    "/images/new2.jpg",
    "/images/yamunaa.jpg",
    "/images/new.jpg",
    "/images/new4.jpg",
    "/images/new5.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className="new-sec bg-dark">
      <ul className="slide">
        {images.map((image, index) => (
          <li key={index} className={`item ${index === currentIndex ? 'slide-animation' : ''}`}>
            <img src={image} alt={`Image ${index + 1}`} className="img-fluid" />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HvtCarousel;
