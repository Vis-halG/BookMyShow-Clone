import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const sideMenuRef = useRef(null);

  // Update the state when the window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close the side menu when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setIsSideMenuOpen(false);
        setIsHamburgerClicked(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup event listener when component unmounts
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    setIsHamburgerClicked(!isHamburgerClicked);
  };

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <nav className="navbar">
          <div className="left-section">
            <div className="logo">
              <img src="./images/logo.png" alt="Logo" />
            </div>
            <div className="search-box">
              <i className="fas fa-search search-icon"></i>
              <input type="text" placeholder="Search for Movies, Events, Play, Sports and Activities" />
            </div>
          </div>
          <div className="right-section">
            <div className="dropdown">
              <select>
                <option value="option1">Mumbai</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <button className="login-button">Sign In</button>
            <div className="hamburger-menu" onClick={toggleMenu}>
              <i className={`fas ${isHamburgerClicked ? "fa-times" : "fa-bars"} hamburger-icon`}></i>
            </div>
          </div>
          {isSideMenuOpen && (
            <div className="side-menu" ref={sideMenuRef}>
              <ul>
                <li>Hey!</li>
                <li>Login / Register</li>
                <li>Notifications</li>
                <li>Your Orders</li>
                <li>Stream Library</li>
                <li>Play Credit Card</li>
                <li>Help & Support</li>
                <li>Accounts & Settings</li>
                <li>Rewards</li>
                <li>Book A Change</li>
              </ul>
            </div>
          )}
        </nav>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <nav className="mobile-navbar">
          <div className="mobile-navbar-left">
            <div className="mobile-navbar-text">It All Starts Here!</div>
            <div className="city">Mumbai &gt;</div>
          </div>
          <div className="mobile-navbar-right">
            <button className="btn-use-app">Use App</button>
            <FaSearch className="search-icon" />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
