import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <div className="aboutus-content">
        <h1 className="aboutus-title">
          <span>Three Steps Away from Getting a</span><br />
          <span>New Restaurant</span>
        </h1>
        <div className="about-subtitle">
          <span>
          Start your journey towards launching a new restaurant with Smaakl. In just three simple steps,</span><br/>
          <span> you can expand your culinary horizon and embark on an exciting new business venture.</span><br/>
          <span> Join us now and explore the endless possibilities that await.
        </span>
        </div>
        

        
        
        <div className="image-row">
          <div className="image-caption">
            <img src={images.state1} alt="State 1" className="image" />
            <p>1.Apply for the Suitable Restaurant</p>
          </div>
          <div className="image-caption">
            <img src={images.state2} alt="State 2" className="image" />
            <p>2.Initial Meeting and Partnership Agreement</p>
          </div>
          <div className="image-caption">
            <img src={images.state3} alt="State 3" className="image" />
            <p>3.Launch into Operation</p>
          </div>
        </div>
        <button type="submit" className="custom-button2">Become a Partner</button>
      </div>
      <div className="aboutus-footer">
     
      </div>
    </div>
  </div>
);

export default AboutUs;
