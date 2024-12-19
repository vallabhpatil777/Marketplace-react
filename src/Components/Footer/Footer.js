import React from 'react';
import './Footer.css'; 
import footericon from '../../assets/footericon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-text">MARKETPLACE.</span>
      </div>
      <div className="footer-right">
        <img src={footericon} alt="footer " className="footer-image" />
      </div>
    </footer>
  );
};

export default Footer;
