import React from 'react';
import './style/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className=".sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Quick Links</h4>
            <ul>
            <li><Link to="/SchoolLife">School LIfe</Link></li>
            <li><Link  to="/Contact">Contact Us</Link></li>
            <li><Link to="/Enquire">Enquire Now</Link></li>
            </ul>
          </div>
          <div className="sb__footer-links_div">
            <h4>Usefull info</h4>
            <ul>
              <li>ContactUs@gloriousdawnmontessorischool@gmail.com </li>
              <li>Phone Number +254113283911</li>
              <li>Community Road, Syokimau,<br/>
              Nairobi, Kenya</li>
            </ul>w
          </div>
          <hr></hr>
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p className='copyright'>
                &copy;{new Date().getFullYear()} GloriousDawnMontessoriSchool. All rights reserved | copyright | license | privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
