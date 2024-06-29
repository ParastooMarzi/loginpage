import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
      </div>
      <div className="app__footer-links_work">
        <p className="p__opensans">About</p>
        <p className="p__opensans">Jobs</p>
        <p className="p__opensans">FAQs</p>          
      </div>

      <div className="app__footer-links_work">
        <div className="app__footer-links_icons" >
          <p className="p__opensans">Social</p>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
        </div>
      
      </div>
      

      <div className="app__footer-links_work">
        <p className="p__opensans">Contact us</p>
        <p className="p__opensans">Email: info.smaakl@gmail.com</p>
        
      </div>
    </div>

    
  </div>
);

export default Footer;
