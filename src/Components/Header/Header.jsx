import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="http://agencylegend.com/images/logo.png" alt="logo" />
      </div>

      <span className="header__text">ATTN: Technical Leads</span>
    </header>
  );
}

export default Header;
