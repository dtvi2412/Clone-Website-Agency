import React from 'react';
import Hero from '../Hero/Hero';
import './Main.css';
function Main() {
  return (
    <section className="main">
      <div className="main__text">
        <strong>SPECIALIZED</strong>
        <h1 className="main__tech">Development &Technology</h1>
        <span className="main__mission">FOR YOUR NEXT MISSION</span>
      </div>
      <div className="hero-holder">
        <Hero />
      </div>
    </section>
  );
}

export default Main;
