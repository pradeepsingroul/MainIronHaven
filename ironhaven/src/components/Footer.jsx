import React from "react";
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css'; // Import your footer styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <ul>
          <li>
            <FaPhone /> Phone: +91 9340724066
          </li>
          <li>
            <FaEnvelope /> Email: info@ironHaven.com
          </li>
          <li>
            <FaMapMarker /> Address: 123 Iron Street, Satna, Madhya Pradesh
          </li>
        </ul>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://www.facebook.com/fitnessplus" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_pradeep_singroul_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/fitnessplus" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/programs">Programs</a>
          </li>
          <li>
            <a href="/plans">Membership</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p>&copy; 2024 Fitness Plus. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
