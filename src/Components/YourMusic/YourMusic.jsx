import React, { useRef } from 'react';
import './YourMusic.css';
import { FaChevronRight } from 'react-icons/fa';

const CardSlider = () => {
  const sliderRef = useRef(null);
  const movies = [
    {
      title: "SulaFest",
      genre: "Sula Vineyards",
      rating: "sat,",
      votes: "1 Feb onwards",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxIEZlYiBvbndhcmRz,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421104-jlnybfljxh-portrait.jpg",
    },
    {
        title: "PT.JITENDRA",
        genre: "Shanmukhanand",
        rating: "Sat,",
        votes: "25 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00423064-lghzvcxhlc-portrait.jpg",
      },
      {
        title: "Sonu Nigam",
        genre: "Dublin Square",
        rating: "Sat,",
        votes: "25 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00417784-puybzvxelc-portrait.jpg",
      },
      {
        title: "HAAZRI",
        genre: "Jio World Garden",
        rating: "Sat,",
        votes: "11 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00414575-hvdegdlkmu-portrait.jpg",
      },
      {
        title: "Gajendra",
        genre: "Courtyard",
        rating: "Sat,",
        votes: "11 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411910-sebpjjzhlt-portrait.jpg",
      },
      {
        title: "Thaikkudam",
        genre: "Dublin Square",
        rating: "Sat,",
        votes: "18 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00409756-wumekxfkqs-portrait.jpg",
      },
      {
        title: "Mehfil",
        genre: "Dome ,NSCI,SVP",
        rating: "Sat,",
        votes: "25 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00425077-dymsjyexfx-portrait.jpg",
      },
      {
        title: " MARTIN GARRIX",
        genre: "D.Y.Patil",
        rating: "Fri,",
        votes: "14 Mar",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNCBNYXI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00418200-mkzalwyedn-portrait.jpg",
      },
      {
        title: "34TH",
        genre: "Parle Tilak",
        rating: "Sat,",
        votes: "11 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421157-kyfudkxbdr-portrait.jpg",
      },
      {
        title: "Dalar mehdi",
        genre: "Grand Theatre",
        rating: "Sat,",
        votes: "1 Feb",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxIEZlYg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00425285-gbyuhnsjbw-portrait.jpg",
      },
      
  ];

  // Function to move slider to last card and back to first card
  const slideRight = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        // If at last card, move to first card
        sliderRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Otherwise, move to last card
        sliderRef.current.scrollTo({
          left: scrollWidth,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="card-slider">
      <div className="header">
        <h2>Recommended Movies</h2>
        <h4>See All</h4>
      </div>

      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {movies.map((movie, index) => (
            <div className="card-wrapper" key={index}>
              <div className="card">
                <img src={movie.image} alt={movie.title} />
                <div className="card-content">
                  <p>{movie.rating} | {movie.votes}</p>
                </div>
              </div>
              <div className="card-details">
                <h3>{movie.title}</h3>
                <p>{movie.genre}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button className="arrow-button" onClick={slideRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;