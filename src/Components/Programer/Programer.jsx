import React from 'react';
import Complete from '../CompleteMission/Complete';
import FieldReport from '../FieldReport/FieldReport';
import './Programer.css';
import droidback from '../../Assets/img/droidback.png';
import DroidSolo from '../../Assets/img/DroidSolo.png';
import btnRight from '../../Assets/img/btn-right.png';
import btnLeft from '../../Assets/img/btn-left.png';

import bulletIcon from '../../Assets/img/bullet-icon.png';
import bulletHover from '../../Assets/img/bullet-hover.png';
import stripImg from '../../Assets/img/strip-img.png';
function Programer() {
  return (
    <div className="programer">
      <h1 className="hide-1300px">PROGRAMING</h1>
      <img src={droidback} alt="bg-droid-back" className="hide-1300px" />
      <img src={DroidSolo} className="hide-1300px" alt="bg-solo" />
      <div className="info-robot">
        <strong>05 - ONBOARDING AND INTEGERATION WITHIN 1 WEEK</strong>
        <img className="strip" src={stripImg} alt="strip" />
        <p>so that your pipeline of projects does'n back up on you</p>
        <a
          href="#"
          style={{ background: `url('${btnLeft}') no-repeat` }}
          className="btn-prev"
        ></a>
        <a
          href="#"
          style={{ background: `url("${btnRight}") no-repeat` }}
          className="btn-next"
        ></a>
      </div>
      <ul className="bullet-list hide-1300px">
        <li className="bullet-icon1">
          <a href="" style={{ background: `url(${bulletIcon}) no-repeat` }}></a>
        </li>
        <li className="bullet-icon2">
          <a href="" style={{ background: `url(${bulletIcon}) no-repeat` }}></a>
        </li>
        <li className="bullet-icon3">
          <a href="" style={{ background: `url(${bulletIcon}) no-repeat` }}></a>
        </li>
        <li className="bullet-icon4">
          <a href="" style={{ background: `url(${bulletIcon}) no-repeat` }}></a>
        </li>
        <li className="bullet-icon5 ">
          <a
            href=""
            style={{ background: `url("${bulletHover}") no-repeat` }}
            className="active"
          ></a>
        </li>
        <li className="bullet-icon6">
          <a href="" style={{ background: `url(${bulletIcon}) no-repeat` }}></a>
        </li>
        <li className="bullet-icon7">
          <a href="" style={{ background: `url(${bulletIcon}) no-repeat` }}></a>
        </li>
      </ul>
      <Complete />
      <FieldReport />
    </div>
  );
}

export default Programer;
