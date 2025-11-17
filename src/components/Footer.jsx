import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
     <footer className="footer">
      <p>© {new Date().getFullYear()} Ram Mandir Seva | All Rights Reserved</p>
      <div className="social-icons">
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} /> Instagram
        </a>
        <a href="mailto:rammandirraipur@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </a>
        <a href="tel:+911234567890">
          <FontAwesomeIcon icon={faPhone} /> +91 12345 67890
        </a>
      </div>
    </footer>
  );
};

export default Footer;
