import React from 'react';
import './fonts.css';
import { AboutUs, Chef, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './Signin.css';

const Signin = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Footer />
  </div>
);

export default Signin;
