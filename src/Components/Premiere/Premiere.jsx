import React, { useRef } from 'react';
import './Premiere.css';
import { FaChevronRight } from 'react-icons/fa';

const Premiere = () => {
  const sliderRef = useRef(null);

  const movies = [
    {
      title: "Mom Tane Nai Samjay",
      genre: "Family, Drama",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MS4zSyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00424440-fypnayhzqq-portrait.jpg",
    },
    {
      title: "Fateh",
      genre: "Action, Thriller",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA2MTAgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00391731-pszykzmtjn-portrait.jpg",
    },
    {
      title: "Mufasa: The Lion King",
      genre: "Adventure, ",
      image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA2Mi4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00396541-epynyumney-portrait.jpg",
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
