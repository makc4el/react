import React, { Component } from 'react';
import './header.css';
import Logo from '.././logo.svg';

class Header extends Component {

  render() {
    return (
      <div className="header">
          <img src={Logo} alt="logo" />
      </div>
    );
  }
}

export default Header;
