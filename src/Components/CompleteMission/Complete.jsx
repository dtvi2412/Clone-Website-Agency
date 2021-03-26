import React, { useState } from 'react';
import './Complete.css';
function Complete() {
  const [dataLogo, setDataLogo] = useState([
    {
      id: 0,
      src: 'http://agencylegend.com/images/logo1.png',
    },
    {
      id: 1,
      src: 'http://agencylegend.com/images/logo2.png',
    },
    {
      id: 2,
      src: 'http://agencylegend.com/images/logo3.png',
    },
    {
      id: 3,
      src: 'http://agencylegend.com/images/logo4.png',
    },
    {
      id: 4,
      src: 'http://agencylegend.com/images/logo5.png',
    },
    {
      id: 5,
      src: 'http://agencylegend.com/images/logo6.png',
    },
    {
      id: 6,
      src: 'http://agencylegend.com/images/logo7.png',
    },
    {
      id: 7,
      src: 'http://agencylegend.com/images/logo8.png',
    },
    {
      id: 8,
      src: 'http://agencylegend.com/images/logo17.png',
    },
  ]);
  const renderLogo = () => {
    return dataLogo.map((item, index) => {
      return (
        <li key={index} className={`logo${item.id}`}>
          <a href="#">
            <img src={item.src} alt={`logo${item.id}}`} />
          </a>
        </li>
      );
    });
  };
  return (
    <div className="complete">
      <strong>COMPLETED MISSIONS</strong>
      <div className="globel-box">
        <img src="http://agencylegend.com/images/globe.png" alt="Earth" />
      </div>
      <ul className="logo-list">{renderLogo()}</ul>
      <div className="img-box" id="robotBOX">
        <img src="http://agencylegend.com/images/robot.png" alt="robot" />
      </div>
    </div>
  );
}

export default Complete;
