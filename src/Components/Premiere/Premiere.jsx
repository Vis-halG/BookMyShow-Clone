import React, { useRef } from 'react';
import './Premiere.css';
import { FaChevronRight } from 'react-icons/fa';

const Premiere = () => {
  const sliderRef = useRef(null);

  const movies = [
    {
      title: "Mom Tane Nai Samjay",
      genre: "Family, Drama",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mom-tane-nai-samjay-et00424440-1734259829.jpg",
    },
    {
      title: "Fateh",
      genre: "Action, Thriller",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fateh-et00391731-1734092649.jpg",
    },
    {
      title: "Mufasa: The Lion King",
      genre: "Adventure, ",
      image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mufasa-the-lion-king-et00396541-1734081980.jpg",
    },
  
  ];

  return (
    <div className="premiere-page">
      <header className="premiere-header">
        <img 
          src="./images/premiere.png" 
          alt="Premiere Banner" 
          className="premiere-banner" 
        />
      </header>

      <section className="premiere-section">
        <h2>Premieres</h2>
        <p>Brand new releases every Friday</p>
        <div className="premiere-slider-container">
          <div className="premiere-slider" ref={sliderRef}>
            {movies.map((movie, index) => (
              <div className="premiere-card-wrapper" key={index}>
                <div className="premiere-card">
                  <img src={movie.image} alt={movie.title} />
                  <div className="premiere-badge">PREMIERE</div>
                </div>
                <div className="premiere-card-details">
                  <h3>{movie.title}</h3>
                  <p>{movie.genre}</p>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </section>
    </div>
  );
};

export default Premiere;
