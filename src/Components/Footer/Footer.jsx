import React from 'react';
import './Footer.css'; // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <p>
          <span className="list-icon">
            <i className="fa-solid fa-house"></i>
          </span>
          List your Show! Got a show, event, activity, or a great experience? Partner with us & get listed on BookMyShow.
        </p>
        <button className="contact-btn">Contact Today!</button>
      </div>

      {/* Middle Section with Icons */}
      <div className="footer-middle">
        <div className="icon-container">
          <div className="icon-section">
            <i className="fa-solid fa-users-viewfinder"></i>
            <span>24/7 CUSTOMER CARE</span>
          </div>
          <div className="icon-section">
            <i className="fa-solid fa-ticket"></i>
            <span>RESEND BOOKING CONFIRMATION</span>
          </div>
          <div className="icon-section">
            <i className="fas fa-envelope"></i>
            <span>SUBSCRIBE TO THE NEWSLETTER</span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="section">
          <h4>Movies Now Showing in Mumbai</h4>
          <p>Game Changer | Fateh | Yeh Jawaani Hai Deewani | Pushpa 2: The Rule | Sangeet Manapmaan | Mufasa: The Lion King | Kaho Naa Pyaar Hai | Nosferatu | Mom Tane Nai Samjay | Den of Thieves 2: Pantera</p>
        </div>
        <div className="section">
          <h4>Upcoming Movies in Mumbai</h4>
          <p>Madha Gaja Raja | Rangashoor | Sankranthiki Vasthunam | Kadhalikka Neramillai | Tharunan | Nesippaya | Narayaneente Moonnammakkal | Pravinkoodu Shappu | Emergency | Mobile Suit Gundam Seed Freedom</p>
        </div>
        <div className="section">
          <h4>Movies by Genre</h4>
          <p>Drama Movies | Action Movies | Thriller Movies | Adventure Movies | Romantic Movies | Crime Movies | Anime Movies | Comedy Movies | Animation Movies | Fantasy Movies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
