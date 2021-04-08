import React, { useState } from 'react';
import './Complete.css';
import logo1 from '../../Assets/img/logo1.png';
import logo2 from '../../Assets/img/logo2.png';
import logo3 from '../../Assets/img/logo3.png';
import logo4 from '../../Assets/img/logo4.png';
import logo5 from '../../Assets/img/logo5.png';
import logo6 from '../../Assets/img/logo6.png';
import logo7 from '../../Assets/img/logo7.png';
import logo8 from '../../Assets/img/logo8.png';
import logo9 from '../../Assets/img/logo17.png';

import globe from '../../Assets/img/globe.png';
import robot from '../../Assets/img/robot.png';
function Complete() {
  const [dataLogo, setDataLogo] = useState([
    {
      id: 0,
      src: logo1,
    },
    {
      id: 1,
      src: logo2,
    },
    {
      id: 2,
      src: logo3,
    },
    {
      id: 3,
      src: logo4,
    },
    {
      id: 4,
      src: logo5,
    },
    {
      id: 5,
      src: logo6,
    },
    {
      id: 6,
      src: logo7,
    },
    {
      id: 7,
      src: logo8,
    },
    {
      id: 8,
      src: logo9,
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
        <img src={globe} alt="Earth" />
      </div>
      <ul className="logo-list">{renderLogo()}</ul>
      <div className="img-box" id="robotBOX">
        <img src={robot} alt="robot" />
      </div>
    </div>
  );
}

export default Complete;
