import React,  {Component} from 'react';
import { BrowserRouter as Router , Link } from "react-router-dom";

import './NavBar.scss';
class NavBar extends Component {
  render() {
    return(
      <div className="navbar-container">
        <div className="app-logo">Logo</div>
        <div className="navigation-lang">
          
          <Router>
          <div className="nav-links-container">
          <Link to='/'><span style={{color: '#555c60'}}>Home</span></Link>
            <Link to='/'><span style={{color: '#555c60'}}>Venom</span></Link>
            <Link to='/'><span style={{color: '#555c60'}}>About us</span></Link>
            <Link to='/'><span style={{color: '#555c60'}}>Contact us</span></Link>
            </div>
          </Router>  
          <div className="dropdown-container">
            <div class="dropdown">
              <button class="dropbtn">EN</button>
              <div class="dropdown-content">
                <a href="#">EN</a>
                <a href="#">RU</a>
                <a href="#">AM</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default NavBar