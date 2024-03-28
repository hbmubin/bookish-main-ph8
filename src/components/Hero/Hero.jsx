// import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="hero md:h-[550px] bg-base-200 rounded-2xl py-10 md:py-0">
        <div className="hero-content flex-col-reverse md:flex-row flex justify-between md:w-full md:px-20">
          <div className="text-center md:text-start">
            <h1 className="text-5xl font-bold mb-10 max-w-md mt-14 md:mt-0">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/listedbooks">
              <button className="btn px-6 bg-green-600 text-white font-bold">
                View The List
              </button>
            </Link>
          </div>
          <div>
            <img src="./pngwing 1.png" className="max-w-sm rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Hero.propTypes = {}

export default Hero;
