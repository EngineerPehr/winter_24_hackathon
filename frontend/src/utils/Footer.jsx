// Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import the icons

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="flex items-center">
                <h5>LOGO</h5>
                <p>Where your mental health comes first.</p>
                <p>Connect with us on our other platforms</p>
                <div className="flex space-x-4">
                    <a href="https://linkedin.com"><FaLinkedin /></a>
                    <a href="https://instagram.com"><FaInstagram /></a>
                    <a href="https://twitter.com"><FaTwitter /></a>
                    <a href="https://facebook.com"><FaFacebook /></a>
                </div>
            </div>
          </div>
          <div className="col">
            <h5>Company</h5>
            <p><a href="about.html">About</a></p>
            <p><a href="contact-us.html">Contact us</a></p>
            <p><a href="careers.html">Careers</a></p>
          </div>
          <div className="col">
            <h5>Support</h5>
            <p>Help center</p>
            <p>Getting started</p>
            <p>Report a bug</p>
            <p>Chat support</p>
          </div>
          <div className="col">
            <h5>Contact Us</h5>
            <p>contact@WorkplaceWellness.com</p>
            <p>(111)222 - 3333</p>
            <p>11 East 9th Street</p>
            <p>Manhattan, 10036</p>
          </div>
        </div>
        <div>
            <p>Copyright &copy; 2024 All Rights Reserved | Terms and Conditions | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

