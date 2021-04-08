import React from 'react';
import './LogoScroll.css';
import iconScroll from '../../Assets/img/icon-scroll.png';
import bgButton from '../../Assets/img/bg-button.png';
function LogoScroll() {
  return (
    <React.Fragment>
      {/* Icon Scroll  */}
      <a href="#" className="logo-scroll">
        <img src={iconScroll} alt="logo-scroll" />
      </a>
      <a
        href="#"
        className="bg-button"
        style={{ background: `url('${bgButton}') no-repeat` }}
      >
        <span>ENGAGRE</span>
      </a>
    </React.Fragment>
  );
}

export default LogoScroll;
