import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './NavBar.scss';
class NavBar extends Component {
  render() {
    const { onLangChange, lang } = this.props;
    return (
      <div className="navbar-container">
        <div className="app-logo"> <a href={window.location.pathname === '/' ? '#home' : '/'}>
                <span style={{ color: '#555c60' }}>Logo</span>
              </a></div>
        <div className="navigation-lang">
          <Router>
            <div className="nav-links-container">

              <a href={window.location.pathname === '/' ? '#venoms' : '/'}>
                <span style={{ color: '#555c60' }}>Venom</span>
              </a>

              <a href={window.location.pathname === '/' ? '#about' : '/'}>
                <span style={{ color: '#555c60' }}>About us</span>
              </a>

              <a href={window.location.pathname === '/' ? '#contact' : '/'}>
                <span style={{ color: '#555c60' }}>Contact us</span>
              </a>
            </div>
          </Router>
          <div className="dropdown-container">
            <div class="dropdown">
              <button class="dropbtn">{lang.toUpperCase()}</button>
              <div class="dropdown-content">
                <a href="#" onClick={() => onLangChange('en')}>
                  EN
                </a>
                <a href="#" onClick={() => onLangChange('ru')}>
                  RU
                </a>
                <a href="#" onClick={() => onLangChange('hy')}>
                  HY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
