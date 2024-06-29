import React from 'react';
import { images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const logos = [...Array(20)].map((_, index) => (
    <img
      key={`logo-${index + 1}`}
      src={images[`Logo${index + 1}`]} // Assuming your images object is structured properly
      alt={`Logo ${index + 1}`}
      className="logo-img"
      style={{ width: '100px' }} // Set the width directly here
    />
  ));

  const rows = [];
  for (let i = 0; i < logos.length; i += 7) {
    rows.push(
      <div className="logo-row" key={`row-${i / 7}`}>
        {logos.slice(i, i + 7)}
      </div>
    );
  }

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-header">
        {/* Image placed at the top */}
        <img src={images.Burger} alt="Special Menu Header" />

        {/* Text placed at the bottom */}
        <div className="specialMenu-caption">
          <span>Explore Smaakl Restaurants: Your</span><br />
          <span>Opportunity to Expand Your Business</span><br/>
        </div> 
        <div className="aboutus-subtitle">
          <span>
            For restaurants looking for an opportunity to increase their sales and expand their reach, Smaak offers a diverse</span><br/>
          <span> array of virtual brands designed to cater to every taste. Join our network and transform your kitchen into a profit</span><br/>
          <span> center serving a wide range of global and local cuisines. We provide you with full support and the technology</span><br/>
          <span> needed to manage orders efficiently, allowing you to maximize your operational capabilities and deliver</span><br/>
          <span> exceptional dining experience to customers. </span>
        </div>
        <div className="logo-container">
          {rows}
        </div>
        <button type="submit" className="custom-button2">Join us as a kitchen! </button>
      </div>            
    </div>
  );
};

export default SpecialMenu;
