import React, { useState, useEffect } from "react";
import "./Carousel.css";

// Image list for the carousel
const images = [
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1736346780175_webshowcase1240x300keinemusik.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1735642019665_revisedajioluxeweekendbanners1240x300.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1736336679417_drumcodewebshowcase1240x300.jpg",
  "https://assets-in.bmscdn.com/promotions/cms/creatives/1736145067004_radhikadasheartlandindiamumbaiwebshowcase1240x300.jpg"
];

const Carousel = () => {
    // Track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Auto-slide delay

    return () => clearInterval(interval);
  }, []);

  // Go to previous slide
  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getSlideStyle = (index) => {
    const offset = index - currentIndex;
    if (offset === 0) return "carousel-slide active";
    if (offset === 1 || offset === -images.length + 1) return "carousel-slide next";
    if (offset === -1 || offset === images.length - 1) return "carousel-slide prev";
    return "carousel-slide hidden";
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={getSlideStyle(index)}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="carousel-controls">
        <button onClick={goToPrevSlide} className="carousel-button">&#10094;</button>
        <button onClick={goToNextSlide} className="carousel-button">&#10095;</button>
      </div>
    </div>
  );
};

export default Carousel;
