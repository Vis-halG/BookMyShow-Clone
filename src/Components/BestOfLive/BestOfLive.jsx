import React, { useRef } from 'react';
import './BestOfLive.css';
import { FaChevronRight } from 'react-icons/fa';

const BestOfLive = () => {
  const sliderRef = useRef(null);
  const movies = [
    {
      title: "Pushpa 2: The Rule",
      genre: "Action/Thriller",
      rating: "8.3/10",
      votes: "434.6K Votes",
      image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png",
    },
    {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTU1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTgwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTQwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/upskill-collection-202211140440.png",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/interactive-games-collection-202211140440.png",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NjArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/arts-crafts-collection-202211140440.png",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTkwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/theatre-shows-collection-202211140440.png",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/adventure-fun-collection-202211140440.png",
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
        <h2>The Best Of Live Events</h2>
       
      </div>

      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          {movies.map((movie, index) => (
            <div className="card-wrapper" key={index}>
              <div className="card">
                <img src={movie.image} alt={movie.title} />
               
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

export default BestOfLive;