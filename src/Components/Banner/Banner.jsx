import React from 'react';
import './Banner.css';
import logo10 from '../../Assets/img/logo10.png';
import imgLeader from '../../Assets/img/img-leader.png';
import bgBtn1 from '../../Assets/img/bg-btn1.png';
function Banner() {
  return (
    <div id="bannerId" className="banner">
      <div className="banner__text">
        <h1 className="name">Ready to engage</h1>
        <p>
          PHALANX is an industry-recognized team who will respond within 24
          hours, and who can be ready to go within just 1 week. Are you ready to
          engage PHALANX and complete your mission?
        </p>
        <div
          className="banner__button"
          style={{ background: `url("${bgBtn1}") no-repeat` }}
        >
          <a href="#">ENGAGE PHALANX</a>
        </div>
        <div className="banner__info">
          <h5>
            FOR IMMEDIATE HELP USE CODE:<a href="#">717 820 365</a>
          </h5>
          <strong>
            Should you or any member of your agency fail or be fired by your
            client, the Secretary will disavow any knowledge of your existence.
          </strong>
          <img id="img-footer" src={logo10} alt="aa" />
        </div>
      </div>
      <div className="banner-image">
        <img src={imgLeader} alt="img-box-banner" />
      </div>
    </div>
  );
}

export default Banner;
