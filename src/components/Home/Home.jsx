// import PropTypes from 'prop-types'

import Books from "../Books/Books";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div className="px-5 mx-auto md:p-0">
      <Hero></Hero>
      <Books></Books>
    </div>
  );
};

// Home.propTypes = {}

export default Home;
