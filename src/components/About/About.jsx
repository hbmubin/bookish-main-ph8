// import PropTypes from 'prop-types'

import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Team from "../Team/Team";

const About = () => {
  const about = useLoaderData();
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-3xl font-bold mt-6 mb-4 text-center">
        {about.title}
      </h1>
      <p className="text-lg text-center mb-12 px-28">{about.description}</p>
      <div className="bg-stone-50 p-10 rounded-lg mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Team Members
        </h2>
        <div className=" grid grid-cols-3 justify-between">
          {about.team.map((member, idx) => (
            <Team key={idx} member={member}></Team>
          ))}
        </div>
      </div>
    </div>
  );
};

// About.propTypes = {}

export default About;
