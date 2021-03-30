import React from 'react';
import Complete from '../CompleteMission/Complete';
import FieldReport from '../FieldReport/FieldReport';
import './Programer.css';
function Programer() {
  return (
    <div className="programer">
      <h1>PROGRAMING</h1>
      <img
        src="http://agencylegend.com/images/droidback.png"
        alt="bg-droid-back"
      />
      <img src="http://agencylegend.com/images/DroidSolo.png" alt="bg-solo" />
      <div className="info-robot">
        <strong>05 - ONBOARDING AND INTEGERATION WITHIN 1 WEEK</strong>
        <p>so that your pipeline of projects does'n back up on you</p>
        <a href="#" className="btn-prev"></a>
        <a href="#" className="btn-next"></a>
      </div>
      <ul className="bullet-list">
        <li className="bullet-icon1">
          <a href=""></a>
        </li>
        <li className="bullet-icon2">
          <a href=""></a>
        </li>
        <li className="bullet-icon3">
          <a href=""></a>
        </li>
        <li className="bullet-icon4">
          <a href=""></a>
        </li>
        <li className="bullet-icon5 ">
          <a href="" className="active"></a>
        </li>
        <li className="bullet-icon6">
          <a href=""></a>
        </li>
        <li className="bullet-icon7">
          <a href=""></a>
        </li>
      </ul>
      <Complete />
      <FieldReport />
    </div>
  );
}

export default Programer;
