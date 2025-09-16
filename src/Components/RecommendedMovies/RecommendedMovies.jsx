import React, { useRef } from 'react';
import './RecommendedMovies.css';
import { FaChevronRight } from 'react-icons/fa';

const RecommendedMovies = () => {
  const sliderRef = useRef(null);
  const movies = [
    {
      title: "FATEH",
      genre: "Action/Thriller",
      rating: "8.3/10",
      votes: "434.6K Votes",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fateh-et00391731-1734092649.jpg",
    },
    {
        title: "GAME CHANGER",
        genre: "Action/Drama/political",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/game-changer-et00311772-1731311322.jpg",
      },
      {
        title: "Pushpa 2: The Rule",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa-2-the-rule-et00356724-1737184762.jpg",
      },
      { title: "MOM TANE NAI SAMJAY",
        genre: "Drama/Family",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mom-tane-nai-samjay-et00424440-1734259829.jpg",
      },
      {
        title: "MARCO",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/marco-et00416394-1734329568.jpg",
      },
      {
        title: "NOSFERATU",
        genre: "Horror/Mystrey",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/nosferatu-et00421894-1738229281.jpg",
      },
      {
        title: "SONIC 3",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAxLjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399670-dfqyesjtnu-portrait.jpg",
      },
      {
        title: "FATEH",
      genre: "Action/Thriller",
      rating: "8.3/10",
      votes: "434.6K Votes",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDguM0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00391731-pszykzmtjn-portrait.jpg",
      },
      {
        title: "BABY JOHN",
        genre: "Action/Thriller",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni43LzEwICAxNi41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386190-uyhrsnljur-portrait.jpg",
      },
      {
        title: "MOM TANE NAI SAMJAY",
        genre: "Drama/Family",
        rating: "8.3/10",
        votes: "434.6K Votes",
        image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS4zSyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424440-fypnayhzqq-portrait.jpg",
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

export default RecommendedMovies;
