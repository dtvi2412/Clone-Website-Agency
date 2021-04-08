import React from 'react';
import './Hero.css';
import hero1 from '../../Assets/img/hero1.png';
import hero2 from '../../Assets/img/hero2.png';
import hero3 from '../../Assets/img/hero3.png';
import hero4 from '../../Assets/img/hero4.png';
function Hero() {
  const hero = [
    {
      id: 0,
      // link: 'http://agencylegend.com/images/hero1.png',
      // WORK
      link: hero1,
    },
    {
      id: 1,
      link: hero2,
    },
    {
      id: 2,
      link: hero3,
    },
    {
      id: 3,
      link: hero4,
    },
  ];
  const renderHero = () => {
    return hero.map((item, index) => {
      return (
        <img
          className={`hero-img hero-img${item.id}`}
          key={index}
          src={item.link}
          alt={`hero-${item.id}`}
        />
      );
    });
  };
  return <section className="hero">{renderHero()}</section>;
}

export default Hero;
