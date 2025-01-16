import React, { useState, useEffect } from "react";
import { FaFilm, FaMusic, FaMicrophoneAlt, FaTheaterMasks, FaGift } from "react-icons/fa"; // Random icons
import "./SubNavbar.css"; // Ensure you have this CSS file

const SubNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="subnavbar">
      {/* Desktop SubNavbar (Visible only on larger screens) */}
      {!isMobile && (
        <div className="desktop-subnavbar">
          <div className="left-section">
            <span>ovies</span>
            <span>Stream</span>
            <span>Events</span>
            <span>Plays</span>
            <span>Sports</span>
            <span>Activities</span>

          </div>

          <div className="right-section">
            <span>ListYourShow</span>
            <span>Corporates</span>
            <span>Offers</span>
            <span>Gift Cards</span>
          </div>
        </div>
      )}

      {/* Mobile SubNavbar (Visible only on small screens) */}
      {isMobile && (
        <div className="mobile-subnavbar">
          <div className="mobile-item">
            <FaFilm className="icon" />
            <span>Movies</span>
          </div>
          <div className="mobile-item">
            <FaGift className="icon" />
            <span>HSBC Lounge</span>
          </div>
          <div className="mobile-item">
            <FaMusic className="icon" />
            <span>Music Shows</span>
          </div>
          <div className="mobile-item">
            <FaMicrophoneAlt className="icon" />
            <span>Comedy Shows</span>
          </div>
          <div className="mobile-item">
            <FaTheaterMasks className="icon" />
            <span>Plays</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SubNavbar;
