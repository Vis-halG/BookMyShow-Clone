import React from 'react';
import './TrendingSearches.css';

const TrendingSearches = () => {
  const trendingItems = [
    { title: 'Game Changer', category: 'Movies' },
    { title: 'Yeh Jawaani Hai Deewani', category: 'Movies' },
    { title: "Cigarettes After Sex X's India Tour 2025", category: 'Events' },
    { title: 'Marco', category: 'Movies' },
    { title: 'Kaho Naa Pyaar Hai', category: 'Movies' },
    { title: 'Pushpa 2: The Rule', category: 'Movies' },
    { title: 'Mufasa: The Lion King', category: 'Movies' },
    { title: 'Ramayana: The Legend of Prince Rama', category: 'Movies' },
    { title: 'Fateh', category: 'Movies' },
    { title: 'Nosferatu', category: 'Movies' },
  ];

  return (
    <div className="trending-container">
      <h2>Trending Searches Right Now</h2>
      <div className="trending-grid">
        {trendingItems.map((item, index) => (
          <div key={index} className="trending-item">
            <p className="trending-title">{item.title}</p>
            <p className="trending-category">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSearches;
