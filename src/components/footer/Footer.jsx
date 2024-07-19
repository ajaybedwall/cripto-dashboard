import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <p>Copyright &copy; 2024, Cryptodashboard - All Rights Reserved.</p>
        <div className='social-icons'>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <FaTwitter />
          </a>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebookF />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
            <FaLinkedinIn />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <FaInstagram />
          </a>
        </div>
        <div className='links'>
          <a href='#privacy-policy'>Privacy Policy</a>
          <a href='#terms-of-service'>Terms of Service</a>
          <a href='#contact-us'>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
