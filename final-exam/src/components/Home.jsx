import introleft from '../graphics/intro-graphic-left.svg';
import introright from '../graphics/intro-graphic-right.svg';
import { Link } from "react-router-dom";
import airbeanlanding from '../graphics/airbean-landing.svg';

function Home() {
  return (
    <div className="Home">
      <img src={introleft} className="Intro-left" alt='introleft' />
      <img src={introright} className="Intro-right" alt='introright' />
      <nav>
        <Link to="/menu">
          <img className="Airbean-landing" src={airbeanlanding} alt='airbeanlanding' />
        </Link>
      </nav>
    </div>
  );
}

export default Home;