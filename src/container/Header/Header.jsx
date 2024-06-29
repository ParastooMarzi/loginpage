import React, { useState } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to handle form submission, such as authentication
    console.log('Submitted:', { username, password, rememberMe });
    // Clear form fields after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome back!</h2>
          <p className="sub-heading">Log in to your account</p>
          <div className="form-group">
            <label htmlFor="username">Username or Email:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group checkbox-group">
  <input
    type="checkbox"
    id="rememberMe"
    checked={rememberMe}
    onChange={(e) => setRememberMe(e.target.checked)}
  />
  <label htmlFor="rememberMe" className="checkbox-label">Remember me</label>
</div>

          <button type="submit" className="custom-button">Login</button>
          <p><a href="#" className="forgot-password">Lost your password?</a></p>
        </form>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
