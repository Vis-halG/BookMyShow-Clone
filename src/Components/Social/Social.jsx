import React from 'react';
import './Social.css'; // Updated to match the new name

const Social = () => {
  return (
    <footer className="social">
      <div className="social-container">
  <div className="social-top-line"></div> {/* Top horizontal line */}
  <div className="social-logo">
    <img src="./images/logoSocial.png" alt="Book My Show Logo" className="social-logo-image" />
  </div>
</div>

      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
      <div className="social-text">
        <p>
          The content and images used on this site are copyright protected and copyrights vests with the respective owners.
          The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied.
          Unauthorized use is prohibited and punishable by law.
        </p>
        <p>Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Social;
