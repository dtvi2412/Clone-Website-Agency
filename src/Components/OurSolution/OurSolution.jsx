import React from 'react';
import Programer from '../Programer/Programer';
import './OurSolution.css';
import bg1 from '../../Assets/img/bg1.png';

import stripImg from '../../Assets/img/strip-img.png';
function OurSolution() {
  return (
    <div className="solution">
      <h1>OUR SOLUTION</h1>
      <div className="bg-img">
        <img src={bg1} alt="bg-2" />
      </div>

      <div className="text">
        <div className="text__01 text-col">
          <strong>01</strong>
          <h2>Get specialized development expertise when you need it most.</h2>
          <img className="strip" src={stripImg} alt="strip" />
          <p>
            Most of your client projects require development. But they
            increasingly require an advanced tethering of multiple platforms,
            API's, and custom programmed processes, some of which you're not
            even sure are compatible the way they need to be.
          </p>
          <p>
            And you could technically figure these types of complex projects out
            given time, but the clock is ticking, and other client projects are
            waiting.
          </p>
          <p>You need more specialized development expertise now.</p>
        </div>
        <div className="text__02 text-col">
          <strong>02</strong>
          <h2>
            PHALANX removes the problem of having to staff underutilized talent.
          </h2>
          <img className="strip" src={stripImg} alt="strip" />
          <p>
            The reason you haven't staffed more specialized development and
            technology expertise is because you can't forecast technical needs,
            and that level of expertise would be underutilized for most
            projects.
          </p>
          <p>
            But you also can't be scrambling in the last hour, and that's why
            we're providing you an
          </p>
        </div>
        <div className="text__03 text-col">
          <strong>03</strong>
          <h2>
            Work with one of the best development teams in the agency world.
          </h2>{' '}
          <img className="strip" src={stripImg} alt="strip" />
          <p>
            PHALANX doesn't just work with agencies like yours, they only work
            with agencies like yours. They have a combined 50 years of
            integrated development expertise on staff, all in the same location,
            versed in over 50 different programming languages, the 5 major
            databases and countless obscure ones, 30 different platforms, and
            innumerable API's.
          </p>
        </div>
      </div>
      {/* <div className="programer">
        <img
          src="http://agencylegend.com/images/droidback.png"
          alt="bg-droid-back"
        />
        <img src="http://agencylegend.com/images/DroidSolo.png" alt="bg-solo" />
      </div> */}
      <Programer />
    </div>
  );
}

export default OurSolution;
