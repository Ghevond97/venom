import React,  {Component} from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="navbar-container">
        <div className="app-logo">Logo</div>
        <div className="navigation-lang">
          <div>
            Links
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar