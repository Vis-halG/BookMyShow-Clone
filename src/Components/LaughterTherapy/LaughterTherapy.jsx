import React, { useRef } from 'react';
import './LaughterTherapy.css';
import { FaChevronRight } from 'react-icons/fa';

const LaughterTherapy = () => {
  const sliderRef = useRef(null);
  const movies = [
    {
      title: "Perfect role Model",
      genre: "Above",
      rating: "Sat,",
      votes: "11 jan",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxMSBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00422252-vmfvvtftbg-portrait.jpg",
    },
    {
      title: "Kisi Ko Batana Mat",
      genre: "sri",
      rating: "Sun,",
      votes: "12 jan",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAxMiBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00355125-zptlvngzdj-portrait.jpg",
    },
      {
        title: "Inder Ssahani",
        genre: "Spades",
        rating: "Fri,",
        votes: "10 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMCBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00368241-adfpzhrbgl-portrait.jpg",
      },
      {
        title: "Daily Kaam ",
        genre: "Mumbai",
        rating: "Fri,",
        votes: "24 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyNCBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00419828-ccdkmylffq-portrait.jpg",
      },
      {
        title: "ALL STAR",
        genre: "Mumbai",
        rating: "Fri,",
        votes: "10 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMCBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00327409-rjbyeurdnu-portrait.jpg",
      },
      {
        title: "Kanan gill",
        genre: "Bal Mandir",
        rating: "Fri,",
        votes: "17 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxNyBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415699-ueqxmprwuc-portrait.jpg",
      },
      {
        title: "Sobo",
        genre: "parel",
        rating: "Fri,",
        votes: "10 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMCBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00415255-uybalgjrew-portrait.jpg",
      },
      {
        title: " To night",
        genre: "Mumbai",
        rating: "Fri,",
        votes: "10 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxMCBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00394631-ufbzesaljp-portrait.jpg",
      },
      {
        title: "Daily kamm ",
        genre: "mandir",
        rating: "Thu,",
        votes: "23 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAyMyBKYW4%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00426567-slutksnwkn-portrait.jpg",
      },
      {
        title: "new kunal",
        genre: "below Mumbai",
        rating: "Fri,",
        votes: "31 jan",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAzMSBKYW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00370105-seuuzvcpby-portrait.jpg",
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
        <h2>Laughter Therapy</h2>
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

export default LaughterTherapy;
