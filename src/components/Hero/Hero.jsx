// import PropTypes from 'prop-types'

const Hero = () => {
  return (
    <div>
      <div className="hero h-[550px] bg-base-200 rounded-2xl">
        <div className="hero-content flex justify-between w-full px-20">
          <div>
            <h1 className="text-5xl font-bold mb-10 max-w-md">
              Books to freshen up your bookshelf
            </h1>
            <button className="btn px-6 bg-green-600 text-white font-bold">
              View The List
            </button>
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
