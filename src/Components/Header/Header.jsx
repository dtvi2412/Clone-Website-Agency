import React from 'react';
import './Header.css';
import logo1 from '../../Assets/img/logo.png';
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        {/* <img src="http://agencylegend.com/images/logo.png" alt="logo" /> */}
        <img src={logo1} alt="logo" />
      </div>

      <span className="header__text">ATTN: Technical Leads</span>
    </header>
  );
}

export default Header;
