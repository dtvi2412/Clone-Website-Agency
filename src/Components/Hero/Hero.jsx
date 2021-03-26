import React from 'react';
import './Hero.css';
function Hero() {
  const hero = [
    {
      id: 0,
      link: 'http://agencylegend.com/images/hero1.png',
    },
    {
      id: 1,
      link: 'http://agencylegend.com/images/hero2.png',
    },
    {
      id: 2,
      link: 'http://agencylegend.com/images/hero3.png',
    },
    {
      id: 3,
      link: 'http://agencylegend.com/images/hero4.png',
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
